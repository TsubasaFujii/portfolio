import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Header } from '../components/layouts/Header';
import Hero from '../components/layouts/Hero';
import AboutMe from '../components/layouts/AboutMe';
import Projects from '../components/layouts/Projects';
import Footer from '../components/layouts/Footer';
import { devices } from '../hooks/viewport';

const Container = styled.main`
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

ContentLayer.propTypes = {
    headerHeight: PropTypes.number
};

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
            <Header ref={headerRef} />
            <ContentLayer headerHeight={headerHeight} />
            <Footer />
        </>
    )
}
