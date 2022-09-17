import React from 'react';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';
import PropTypes from 'prop-types';

import Button from '../../Button';
import { H2, H3 } from '../../Heading';
import { GroupedIcons, Icon } from '../../Icon';
import { Text } from '../../Text';
import Image from '../../Image';

import { devices } from '../../../hooks/viewport';
import { projectsData } from '../../../data/content';
import { SectionRef } from '../../Section';
import { FlexColumn } from '../../Flex';

const Wrapper = styled(SectionRef).attrs(() => ({
    id: 'projects'
}))`
    scroll-margin: 10vh;

    @media screen and (${devices.tablet}) {
        padding: ${({ theme }) => theme.spacing.xl};
    }
`;

// To call in ProjectWrapper
const ProjectTitle = styled(H3)`
`;

const Thumbnail = styled(Image)`
    & .image {
        background-size: 100%;
    }
    
    &:hover .image {
        background-size: 120%;
    }
`;

const ProjectWrapper = styled.div`
    width: 100%;

    display: grid;
    gap: ${({ theme }) => theme.spacing.sm};

    @media screen and (${devices.tablet}) {
        gap: ${({ theme }) => theme.spacing.md};
    }

    @media screen and (${devices.desktop}) {
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(3, auto);

        & ${ProjectTitle} {
            grid-row: 1 / span 1;
        }

        & .details {
            grid-row: 2 / span 2;
        }

        & ${Thumbnail} {
            grid-row: 1 / span 3;
            align-self: center;
        }

        &:nth-child(odd) {
            & ${ProjectTitle} {
                grid-column: 2 / span 1;
            }

            & .details {
                grid-column: 2 / span 1;
            }

            & ${Thumbnail} {
                grid-column: 1 / span 1;
            }
        }

        &:nth-child(even) {
            & ${ProjectTitle} {
                grid-column: 1 / span 1;
            }

            & .details {
                grid-column: 1 / span 1;
            }

            & ${Thumbnail} {
                grid-column: 2 / span 1;
            }
        }
    }
`;

const List = styled(FlexColumn)`
    gap: ${({ theme }) => theme.spacing.gap};

    @media screen and (${devices.tablet}) {
        padding: ${({ theme }) => theme.spacing.md};
    }
    @media screen and (${devices.desktop}) {
        gap: ${({ theme }) => `calc(${theme.spacing.gap} * 2)`};
    }
`;

const Details = styled(FlexColumn)`
    flex-wrap: wrap;
    align-items: flex-start;
`

function Title(props) {
    const { title, isVisible, url } = props;

    return (
        <a href={url}>
            <H3 isVisible={isVisible}>{title}</H3>
        </a>
    );
}

Title.propTypes = {
    title: PropTypes.string,
    url: PropTypes.string,
    isVisible: PropTypes.bool,
};

function Description(props) {
    const { description } = props;
    return (
        <Text>
            {description}
        </Text>
    )
}

Description.propTypes = {
    description: PropTypes.string,
};

function Project(props) {
    const { title, thumbnail, tools, description, github, production } = props;
    const { ref, inView } = useInView({
        initialInView: false,
        threshold: 0.3,
    });

    function onClick() {
        console.log('Open', github);
    }

    return (
        <ProjectWrapper ref={ref}>
            <Thumbnail src={thumbnail} isVisible={inView} clickable landscape />
            <Title title={title} isVisible={inView} url={production} />
            <Details className='details'>
                <Description description={description} />
                <GroupedIcons names={tools} />
                <Button
                    label='GitHub'
                    icon={<Icon name='code' />}
                    onClick={onClick} />
            </Details>
        </ProjectWrapper>
    );
}

Project.propTypes = {
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    tools: PropTypes.array,
    description: PropTypes.string,
    github: PropTypes.string,
    production: PropTypes.string,
};

function Heading(props) {
    const { isVisible } = props;
    return (
        <>
            <H2 isVisible={isVisible}>
                projects
            </H2>
        </>
    )
}
Heading.propTypes = {
    isVisible: PropTypes.bool,
};

function ProjectList() {
    return (
        <List>
            {projectsData.filter(p => p.starred).map(project => <Project {...project} key={project.title} />)}
        </List>
    )
}

export default function HighlightedProjects() {
    const { ref, inView } = useInView({
        initialInView: false,
    });

    return (
        <Wrapper ref={ref}>
            <Heading isVisible={inView} />
            <ProjectList />
        </Wrapper>
    )
}
