import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import PropTypes from 'prop-types';

import Button from '../Button';
import { H2 } from '../Heading';
import Icon from '../Icon';
import Text from '../Text';
import Image from '../Image';

import externalIcon from '../../assets/icons/external.svg';
import { devices } from '../../hooks/viewport';
import { projects } from '../../data/content';

const Wrapper = styled.section.attrs(() => ({
    id: 'projects'
}))`
    position: relative;

    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.md};
    justify-content: center;

    scroll-margin: 10vh;

    @media screen and (${devices.tablet}) {
        padding: ${({ theme }) => theme.spacing.xl};
    }
`;


const ProjectTitle = styled(motion.h3)`
    position: relative;
    right: ${({ theme }) => `-${theme.spacing.sm}`};
    padding-right: ${({ theme }) => `calc(${theme.spacing.sm} + 0.5em)`};
    color: ${({ theme }) => theme.fontColor};
    text-transform: capitalize;
`;

const Thumbnail = styled(Image)`
    &:hover {
        cursor: pointer;
    }

    & > .image {
        width: 100%;
        aspect-ratio: 16 / 9;
        display: block;
        margin: auto 0;

        position: relative;
        z-index: 250;

        background-size: contain;
    }

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
`;

const ProjectWrapper = styled.div`
    width: 100%;

    display: grid;
    gap: ${({ theme }) => theme.spacing.md};

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

const List = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.gap};

    @media screen and (${devices.tablet}) {
        padding: ${({ theme }) => theme.spacing.md};
    }
    @media screen and (${devices.desktop}) {
        gap: ${({ theme }) => `calc(${theme.spacing.gap} * 2)`};
    }
`;

/* const ProjectThumbnail = styled.div`
    width: 100%;
    padding: ${({ theme }) => theme.spacing.md};
    position: relative;

    &:before {
        content: '';
        width: 100%;
        height: 100%;
        z-index: -1;

        position: absolute;
        top: 0;
        // margin 5% the radius 5% 50% - 10% = 40% to make it center
        clip-path: circle(5% at 40% center);
        background-color: ${({ theme }) => theme.colors.primary};

        transition: clip-path 0.3s;
    }

    &.isVisible:before {
        clip-path: circle(35% at 55% center);
    }

    @media screen and (${devices.tablet}) {
        padding: 0;

        &:before {
            clip-path: circle(5% at center);
            background-color: ${({ theme }) => theme.colors.primary};

            transition: clip-path 0.3s;
        }

        &.isVisible:before {
            clip-path: circle(30% at center);
        }
    }
`;

const ThumbnailImage = styled(motion.div)`
    width: 95%; 
    margin-right: 5%;
    aspect-ratio: 16 / 9;

    position: relative;
    z-index: 250;

    background: ${({ $img }) => `center / cover no-repeat url(${$img})`};
    box-shadow: 4px 4px 8px rgba(26, 13, 6, 0.2);
    
    &:hover {
        cursor: pointer;
    }

    &:after {
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

    @media screen and (${devices.tablet}) {
        max-width: 30rem;
        margin: auto;
    }
`; */

const Link = styled.a`
    text-decoration: none;
`;


const expand = keyframes`
    0% {
        transform: scaleX(0%);
    }
    100% {
      transform: scaleX(100%) skew(-12deg);
    }
`;

const AnimatedUnderline = styled(motion.span)`
    position: relative;
    overflow: hidden;

    &:before {
        content: '';
        height: 0.5em;
        width: 100%;
        display: block;
        
        position: absolute;
        left: 0;
        bottom: 0;
        // HEX 45% = 73
        background: ${({ theme }) => `${theme.colors.primary50}73`};
        z-index: -1;
    }

    &.shown:before {
        animation: ${expand} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
    }
`;

const Details = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.md};
    flex-wrap: wrap;
    justify-content: center;
`
const GroupedTools = styled.div`
    display: flex;
    flex-direction: row;
    gap: ${({ theme }) => theme.spacing.xs};
    color: ${({ theme }) => theme.colors.primary};
    font-size: 1.5rem;
`;

/* function Thumbnail(props) {
    const { img, isVisible, url } = props;

    function handleOnClick() {
        console.log('open product version', url);
    }

    return (
        <ProjectThumbnail className={isVisible ? 'isVisible' : null}>
            <ThumbnailImage
                animate={{
                    opacity: isVisible ? 1 : 0,
                    y: isVisible ? 0 : '-2rem',
                }}
                $img={img}
                onClick={handleOnClick} />
        </ProjectThumbnail>
    );
}

Thumbnail.propTypes = {
    img: PropTypes.string,
    url: PropTypes.string,
    isVisible: PropTypes.bool,
}; */

function Title(props) {
    const { title, isVisible, url } = props;

    return (
        <Link href={url}>
            <ProjectTitle
                initial={{ left: 0, }}
                animate={{
                    opacity: isVisible ? 1 : 0,
                }}>
                <AnimatedUnderline className={isVisible ? 'shown' : null}>{title}</AnimatedUnderline>
            </ProjectTitle>
        </Link>
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
    const { title, thumbnail, tools, description, github, url } = props;
    const { ref, inView } = useInView({
        initialInView: false,
        threshold: 0.3,
    });

    function onClick() {
        console.log('Open', github);
    }

    return (
        <ProjectWrapper ref={ref}>
            <Thumbnail img={thumbnail} isVisible={inView} />
            <Title title={title} isVisible={inView} url={url} />
            <Details className='details'>
                <Description description={description} />
                <GroupedTools>{tools.map((tool, index) => <Icon key={index} name={tool} />)}</GroupedTools>
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
    url: PropTypes.string,
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
            {projects.map(project => <Project {...project} key={project.title} />)}
        </List>
    )
}

export default function Projects() {
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
