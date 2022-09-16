import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { devices } from '../../../hooks/viewport';
import { ThemeContext } from '../../styles/ContextProviders';

import externalIcon from '../../../assets/icons/external.svg';
import { GroupedIcons, Icon } from '../../Icon';
import Button from '../../Button';
import Text from '../../Text';
import { useInView } from 'react-intersection-observer';

const Grid = styled.section`
    min-height: 50vh;
    margin-top: ${({ theme }) => theme.spacing.md};
    display: grid;
    grid-template-columns: 100%;
    gap: ${({ theme }) => `${theme.spacing.lg} ${theme.spacing.md}`};

    @media screen and (${devices.tablet}) {
        grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
    }
    @media screen and (${devices.desktop}) {
        grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
        gap: ${({ theme }) => `${theme.spacing.gap} ${theme.spacing.lg}`};
    }
`;

const Card = styled.article`
    width: 100%;
    height: 100%;

    background: ${({ $currentTheme }) =>
        $currentTheme === 'dark' ?
            'rgba(255, 255, 255, 0.3)' :
            'rgba(255, 255, 255, 0.1)'};
    border-radius: 1rem;
    overflow: hidden;
`;

const Flex = styled.div`
    width: 100%;
    height: 100%;
    padding: ${({ theme }) => `${theme.spacing.sm}`};

    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.sm};
`;

const Thumbnail = styled.div`
    width: 100%;
    aspect-ratio: 16/9;
    position: relative;

    background: ${({ $img }) => `center no-repeat url(${$img})`};
    background-size: auto 100%;

    transition: background-size 0.2s ease-in;

    &:before {
        content: '';
        width: 1rem;
        height: 1rem;

        position: absolute;
        right: 0.5rem;
        bottom: 0.5rem;

        mask: url(${externalIcon}) no-repeat 50% 50%;
        mask-size: cover;
        background-color: ${({ theme }) => theme.colors.primary};
    }

    &:hover {
        cursor: pointer;
        background-size: auto 120%;
    }
    
`;

function Project(props) {
    const { thumbnail, title, tools, github, description, production } = props;
    const { ref } = useInView({
        initialInView: false,
        threshold: 0.3,
    });

    function openExternalLink(url) {
        console.log('Open', url);
    }

    return (
        <Card ref={ref}>
            <Thumbnail
                className='thumbnail'
                $img={thumbnail}
                onClick={() => openExternalLink(production)} />
            <Flex>
                <a href={production}><h4>{title}</h4></a>
                <Text>{description}</Text>
                <GroupedIcons names={tools} size='1rem' />
                <Button
                    label='GitHub'
                    icon={<Icon name='code' />}
                    onClick={() => openExternalLink(github)} />
            </Flex>
        </Card>
    )
}

Project.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    production: PropTypes.string,
    thumbnail: PropTypes.string,
    tools: PropTypes.array,
    github: PropTypes.string,
    url: PropTypes.string,
};

export default function GridView(props) {
    const { projectList } = props;
    const { currentTheme } = useContext(ThemeContext);
    return (
        <Grid>
            {
                projectList.length > 0 ?
                    projectList.map(project =>
                        <Project
                            key={project.title}
                            {...project}
                            $currentTheme={currentTheme} />
                    ) :
                    <div>No match</div>
            }
        </Grid>
    )
}

GridView.propTypes = {
    projectList: PropTypes.array,
}