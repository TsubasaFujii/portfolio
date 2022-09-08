import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Hero from '../components/layouts/Hero';
import AboutMe from '../components/layouts/AboutMe';
import Projects from '../components/layouts/Projects';
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

export default function Home(props) {
    const { headerHeight } = props;

    return (
        <Container headerHeight={headerHeight}>
            <Hero headerHeight={headerHeight} />
            <AboutMe />
            <Projects />
        </Container>
    )
}

Home.propTypes = {
    headerHeight: PropTypes.number,
};
