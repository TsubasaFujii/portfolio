import React, { useContext, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import styled, { keyframes, useTheme } from 'styled-components';
import { useInView } from 'react-intersection-observer';

import { useParallaxElement } from '../hooks/parallax';

import Hero from '../components/layouts/Hero';

import bgForLight from '../assets/bg-light.svg';
import bgForDark from '../assets/bg-dark.svg';
import { Header } from '../components/layouts/Header';
import { useState } from 'react';
import { ThemeContext } from '../components/styles/ContextProviders';
import AboutMe from '../components/layouts/AboutMe';
import { forwardRef } from 'react';
import Projects from '../components/layouts/Projects';

const Container = styled.main`
    width: 100vw;
    padding: ${({ theme }) => `0 ${theme.spacing.sm} 0`};

    z-index: 200;
    position: relative;
    overflow-x: hidden;
    
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.xl};
`;
/* 
const BackgroundWrapper = styled.div`
    width: 100%;
    position: absolute;
    
    right: -50%;
`;


const Svg = styled.svg`
position: fixed;

    &.svg2 {
    top: 50 %;
}
    &.svg3 {
    top: 60 %;
}
`;

const Wrapper = styled.div`
position: relative;
display: flex;
justify - content: center;
align - items: center;
height: 100vh;
top: 0;
`;



const expand = keyframes`
100 % {
    width: 100 %;
}
    `;

const AnimatedUnderline = styled(motion.span)`
position: relative;
overflow: hidden;
    &:before {
    content: '';
    height: 2rem;
    width: 0 %;
    display: block;

    position: absolute;
    left: 0;
    bottom: 1rem;

    background: ${({ theme }) => theme.colors.primaryTransparent};
    transform: skew(-12deg);
    z - index: 10;
}
    &.shown:before {
    animation: ${expand} 1.2s ease -in forwards;
}
`; */

const BackgroundWrapper = styled(motion.div)`
    width: 100%;

    z-index: -1;
    position: absolute;

    top: ${({ $headerHeight }) => `${$headerHeight}px`};
    right: -50%;
`;


const HeaderLayer = forwardRef((props, ref) => (
    <Header ref={ref} {...props} />
));

function ContentLayer(props) {
    const { headerHeight } = props;

    return (
        <Container headerHeight={headerHeight}>
            <Hero headerHeight={headerHeight} />
            <AboutMe />
            <Projects />
        </Container>
    );
}

function BackgroundLayer(props) {
    const { headerHeight } = props;
    const theme = useTheme();

    const { targetRef } = useParallaxElement({ speed: 0.5 });
    const ref = useRef(null);
    const isInView = useInView(ref);


    return (
        <BackgroundWrapper $headerHeight={headerHeight} ref={targetRef}>
            <svg
                viewBox='0 0 100 100'
                xmlns='http://www.w3.org/2000/svg'
                fill={theme.colors.primary}
                className='bg1'>
                <circle cx='50' cy='50' r='50' />
            </svg>
        </BackgroundWrapper>

        /*     &::after {
                content:'';
                width: 200%;
                z-index: -1;
        
                position: absolute;
                top: 0;
                bottom: 0;
                right: 0;
                left: 0;
        
                background: ${({ currentTheme, headerHeight }) =>
                `no-repeat center ${headerHeight}px / 50vmax ` +
                `url(${currentTheme === 'dark' ? bgForDark : bgForLight})`};
            } */
    );
}

export default function Home() {
    const headerRef = useRef(null);
    const [headerHeight, setHeaderHeight] = useState(null);

    useEffect(() => {
        if (!headerRef.current) return;
        function handleResize() {
            setHeaderHeight(headerRef.current.clientHeight);
        }

        setHeaderHeight(headerRef.current.clientHeight);

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [headerRef]);

    return (
        <>
            <HeaderLayer ref={headerRef} />
            <ContentLayer headerHeight={headerHeight} />
            <BackgroundLayer headerHeight={headerHeight} />
        </>
    )
}
