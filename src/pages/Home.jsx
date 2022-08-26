import React, { useContext, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import styled, { keyframes } from 'styled-components';

import { useParallaxElement } from '../hooks/parallax';

import Hero from '../components/layouts/Hero';

import bgForLight from '../assets/bg-light.svg';
import bgForDark from '../assets/bg-dark.svg';
import { Header } from '../components/layouts/Header';
import { useState } from 'react';
import { ThemeContext } from '../components/styles/ContextProviders';

const Container = styled.div`
    width: 100%;
    padding: ${({ theme }) => `0 ${theme.spacing.sm} 0`};

    position: relative;
    overflow-x: hidden;
    // TODO FLEX & GAP

    &::after {
        content:'';
        width: 200%;
        z-index: -1;

        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;

        background: ${({ mode, headerHeight }) =>
        `no-repeat center ${headerHeight}px / 50vmax ` +
        `url(${mode === 'dark' ? bgForDark : bgForLight})`};
    }
`;

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
`;

export default function Home(props) {
    const { toggleTheme } = props;
    const [headerHeight, setHeaderHeight] = useState(null);
    const headerRef = useRef(null);
    const mode = useContext(ThemeContext);

    useEffect(() => {
        if (!headerRef.current) return;
        function handleResize() {
            setHeaderHeight(headerRef.current.clientHeight);
        }

        setHeaderHeight(headerRef.current.clientHeight);

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [headerRef]);

    const { target } = useParallaxElement({ speed: 0.5 });
    const ref = useRef(null);
    const isInView = useInView(ref);

    return (
        <>
            <Header ref={headerRef} toggleTheme={toggleTheme} />
            <Container mode={mode} headerHeight={headerHeight}>
                <Hero headerHeight={headerHeight} />
                {/* <Wrapper ref={ref}>
                <motion.h1 initial={{ y: -100 }}
                    whileInView={{ y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.35,
                    }}>
                    Hello,
                </motion.h1>
                <motion.h1 initial={{ y: 100 }}
                    whileInView={{ y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.35,
                    }}>
                    I'm
                    <AnimatedUnderline className={isInView ? 'shown' : null}>
                        Tsubasa
                    </AnimatedUnderline>
                </motion.h1>
                <h1 align='right' size={4} lowercase initial={{ y: 100 }} animate={{ y: 0 }}>
                    [ts-u-ba-sa]
                </h1>
            </Wrapper>
            <Wrapper z={3}>
                assdslndlm
            </Wrapper> */}
            </Container>
        </>
    )
}
