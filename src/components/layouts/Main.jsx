import React, { useEffect, useRef, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';

import { links } from '../../data/content';
import { devices, useTrackViewport } from '../../hooks/viewport';

import { Header } from './Header';
import Home from '../../pages/Home';
import Projects from '../../pages/Projects';
import Footer from './Footer';

const Container = styled.main`
    margin-top: ${({ $headerHeight }) => `${$headerHeight}px`};
    padding: ${({ theme }) => `0 ${theme.spacing.md}`};
    z-index: 200;

    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.gap};

    & section:last-child {
        margin-bottom: ${({ theme }) => theme.spacing.gap};
    }
    
    @media screen and (${devices.mobileL}) {
        padding: ${({ theme }) => `0 ${theme.spacing.xl}`};
    }
`;

export default function Main() {
    const [headerHeight, setHeaderHeight] = useState(null);
    const headerRef = useRef(null);

    const { currentSection, refs } = useTrackViewport(links);
    const { contactRef } = refs;

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
            <Header ref={headerRef} current={currentSection} links={links} />
            <Container $headerHeight={headerHeight}>
                <Routes>
                    <Route path="/" element={<Home headerHeight={headerHeight} />} />
                    <Route path="/projects" element={<Projects headerHeight={headerHeight} />} />
                </Routes>
            </Container>
            <Footer contactRef={contactRef} />
        </>
    )
}
