import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Button } from '../../Button';
import { H2, H3 } from '../../Heading';
import { GroupedIcons } from '../../Icon';
import { Text } from '../../Text';
import Image from '../../Image';
import { SectionRef } from '../../Section';
import { FlexColumn } from '../../Flex';

import { devices } from '../../../hooks/viewport';
import { projectsData } from '../../../data/content';
import { scrollToTop } from '../../../js/window';
import { Content } from '../../Content';

const Wrapper = styled(SectionRef).attrs(() => ({
    id: 'projects'
}))`
    scroll-margin: 10vh;
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
        gap: ${({ theme }) => theme.spacing.doubleGap};
    }
`;

const Details = styled(FlexColumn)`
    flex-wrap: wrap;
    align-items: flex-start;
`;

function Project(props) {
    const { title, thumbnail, tools, description, github, production } = props;

    function onClick() {
        console.log('Open', github);
    }

    return (
        <ProjectWrapper>
            <Thumbnail src={thumbnail} clickable landscape />
            <a href={production}><H3>{title}</H3></a>
            <Details className='details'>
                <Text>{description}</Text>
                <GroupedIcons names={tools} />
                <Button
                    label='GitHub'
                    icon='code'
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

export default function HighlightedProjects() {
    const { ref, inView } = useInView({
        initialInView: false,
    });
    const navigate = useNavigate();

    return (
        <Wrapper ref={ref}>
            <Content>
                <H2 isVisible={inView}>projects</H2>
                <List>
                    {projectsData
                        .filter(p => p.starred)
                        .map(project => <Project {...project} key={project.title} />)}
                    <Button
                        label='check more projects'
                        icon='chevronRight'
                        onClick={() => {
                            navigate('/projects');
                            scrollToTop();
                        }}
                        secondary />
                </List>
            </Content>
        </Wrapper>
    )
}
