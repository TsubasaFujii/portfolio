import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import Button from '../Button';
import { H2 } from '../Heading';
import Icon from '../Icon';

import project1 from '../../assets/projects/webShop.JPG';
import externalIcon from '../../assets/icons/external.svg';
import Text from '../Text';

const projects = [
    {
        title: 'e-commance website',
        img: project1,
        tools: ['react', 'vue', 'node']
    },
    {
        title: 'To do list',
        img: project1,
        tools: ['vue', 'node']
    }
]

const Wrapper = styled.section.attrs(() => ({
    id: 'projects'
}))`
    position: relative;

    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.xl};
    justify-content: center;

    scroll-margin: 10vh;
`;

const ProjectWrapper = styled.div`
    width: 100%;
    min-height: 100vh;

    display: flex;
    flex-direction: column;
    flex: 1;
    gap: ${({ theme }) => theme.spacing.md};
    justify-content: flex-start;
    
`;

const ProjectThumbnail = styled.div`
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
`;

const ProjectTitle = styled(motion.h4)`
    position: relative;
    right: ${({ theme }) => `-${theme.spacing.sm}`};
    padding-right: ${({ theme }) => `calc(${theme.spacing.sm} + 0.5em)`};
    color: ${({ theme }) => theme.fontColor};
    text-transform: capitalize;
`;

const expand = keyframes`
    100% {
      width: 100%;
    }
`;

const AnimatedUnderline = styled(motion.span)`
    position: relative;
    overflow: hidden;

    &:before {
        content: '';
        height: 0.5em;
        width: 0%;
        display: block;
        
        position: absolute;
        left: 0;
        bottom: 0;
        // HEX 45% = 73
        background: ${({ theme }) => `${theme.colors.primary20}73`};
        transform: skew(-12deg);
        z-index: -1;
    }

    &.isVisible:before {
        animation: ${expand} 1.2s ease-in forwards;
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

function Title(props) {
    const { title, isVisible } = props;

    return (
        <ProjectTitle
            initial={{ left: 0, }}
            animate={{
                opacity: isVisible ? 1 : 0,
            }}>
            <AnimatedUnderline className={isVisible ? 'isVisible' : null}>{title}</AnimatedUnderline>
        </ProjectTitle>
    );
}

function Thumbnail(props) {
    const { img, isVisible } = props;


    function handleOnClick() {
        console.log('open product version');
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

function Project(props) {
    const { title, img, tools } = props;
    const { ref, inView } = useInView({
        initialInView: false,
        threshold: 0.3,
    });

    return (
        <ProjectWrapper ref={ref}>
            <Thumbnail img={img} isVisible={inView} />
            <Title title={title} isVisible={inView} />
            <Details>
                <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna.
                </Text>
                <GroupedTools>{tools.map((tool, index) => <Icon key={index} name={tool} />)}</GroupedTools>
                <Button label='GitHub' icon={<Icon name='code' />} />
            </Details>
        </ProjectWrapper>
    );
}

function ProjectHeading(props) {
    const { isVisible } = props;
    return (
        <>
            <H2 isVisible={isVisible}>
                projects
            </H2>
        </>
    )
}

export default function Projects() {
    const { ref, inView } = useInView({
        initialInView: false,
    });

    return (
        <Wrapper ref={ref}>
            <ProjectHeading isVisible={inView} />
            {projects.map(project => <Project {...project} key={project.title} />)}
        </Wrapper>
    )
}
