import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Hero from '../components/layouts/Hero';
import { Header } from '../components/layouts/Header';
import AboutMe from '../components/layouts/AboutMe';
import Projects from '../components/layouts/Projects';
import Footer from '../components/layouts/Footer';

const Container = styled.main`
    width: 100vw;
    padding: ${({ theme }) => `0 ${theme.spacing.md} 0`};

    z-index: 200;
    position: relative;
    overflow-x: hidden;
    
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.xl};

    & section:last-child {
        margin-bottom: ${({ theme }) => theme.spacing.xl};
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
