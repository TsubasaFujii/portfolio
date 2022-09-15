import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useInView } from 'react-intersection-observer';

import { devices } from '../hooks/viewport';
import { projectsData } from '../data/content';
import { GroupedIcons, Icon } from '../components/Icon';
import Button from '../components/Button';
import Text from '../components/Text';
import externalIcon from '../assets/icons/external.svg';
import Main from '../components/layouts/Main';
import { useContext } from 'react';
import { ThemeContext } from '../components/styles/ContextProviders';

const Grid = styled.section`
    min-height: 50vh;
    display: grid;
    grid-template-columns: 100%;
    gap: ${({ theme }) => `${theme.spacing.lg} ${theme.spacing.md}`};

    @media screen and (${devices.tablet}) {
        grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
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

const CheckboxWrapper = styled.aside.attrs(() => ({
    className: 'filters'
}))`
    width: 100%;
    padding: ${({ theme }) => `${theme.spacing.md} 0`};

    z-index: 300;
`;

const GroupedCheckbox = styled.div`
    width: 100%;
    padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.sm}`};

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.sm};

    background: ${({ theme }) => theme.colors.primary20};
    color: ${({ theme }) => theme.colors.black};

    & > div {
        flex: 0;

        display: flex;
        flex-direction: row;
    }

    & input[type='checkbox'] {
        accent-color: ${({ theme }) => theme.colors.white};
        width: 1rem;
        height: 1rem;
    }

    & label {
        padding-left: 0.2rem;
        font-size: 1.2rem;
        text-transform: capitalize;
        font-family: 'Josefin Sans', sans-serif;
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

function Checkbox(props) {
    const { item, handleOnChange } = props;
    return (
        <div>
            <input
                type="checkbox"
                id={item}
                name='filter'
                value={item}
                onChange={handleOnChange} />
            <label htmlFor={item}>{item}</label>
        </div>
    )
}

Checkbox.propTypes = {
    item: PropTypes.string,
    handleOnChange: PropTypes.func,
}

function Filter(props) {
    const { headerHeight, updateFilterBy } = props;
    return (
        <CheckboxWrapper $headerHeight={headerHeight}>
            <GroupedCheckbox>
                {
                    list.map(item =>
                        <Checkbox
                            key={item}
                            item={item}
                            handleOnChange={updateFilterBy} />
                    )
                }
            </GroupedCheckbox>
        </CheckboxWrapper>
    )
}

Filter.propTypes = {
    headerHeight: PropTypes.number,
    updateFilterBy: PropTypes.func,
    isActive: PropTypes.bool,
}

const list = ['react', 'javaScript', 'node', 'vue'];

export default function Projects(props) {
    const { headerHeight } = props;
    const [filterBy, setFilterBy] = useState([]);
    const [projectList, setProjectList] = useState([]);
    const { currentTheme } = useContext(ThemeContext);

    function updateFilterBy(event) {
        const target = event.target;
        setFilterBy(prev => {
            if (target.checked) {
                return [...prev, target.value];
            } else {
                return prev.filter(item => item !== target.value);
            }
        });
    }

    useEffect(() => {
        const newList = projectsData.filter(data =>
            filterBy.length === 0 ?
                projectsData :
                filterBy.every(item => data.tools.includes(item))
        );
        setProjectList(newList);
    }, [filterBy]);

    return (
        <Main headerHeight={headerHeight}>
            <Filter
                updateFilterBy={updateFilterBy}
                headerHeight={headerHeight} />
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

        </Main>
    )
}

Projects.propTypes = {
    headerHeight: PropTypes.number,
};