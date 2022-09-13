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

const Grid = styled.section`
    display: grid;
    grid-template-columns: 100%;
    gap: ${({ theme }) => `${theme.spacing.lg} ${theme.spacing.md}`};

    @media screen and (${devices.tablet}) {
        grid-template-columns: repeat(2, 1fr);
    }

`;

const Card = styled.article`
    width: 100%;
    height: 100%;

    background: rgba(255, 255, 255, 0.3);
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

    background: ${({ $img }) => `center / cover no-repeat url(${$img})`};

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
    }
    
`;

const CheckboxWrapper = styled.div`
    width: 100%;
    height: 100%;
    padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.sm}`};
    grid-row: 1 / span 2;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.sm};

    background: ${({ theme }) => theme.colors.primary20};

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

    @media screen and (${devices.tablet}) {
        grid-column: 1 / span 2;
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

const list = ['react', 'javaScript', 'node', 'vue'];

export default function Projects() {
    const [filterBy, setFilterBy] = useState([]);
    const [projectList, setProjectList] = useState([]);

    function handleOnChange(event) {
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
                filterBy.some(item => data.tools.includes(item))
        );
        setProjectList(newList);
    }, [filterBy]);

    return (
        <>
            <Grid>
                <CheckboxWrapper>
                    {
                        list.map(item =>
                            <Checkbox key={item} item={item} handleOnChange={handleOnChange} />
                        )
                    }
                </CheckboxWrapper>
                {
                    projectList.map(project => <Project key={project.title} {...project} />)
                }
            </Grid>

        </>
    )
}
