import React from 'react';
import styled from 'styled-components';

import Main from '../components/layouts/Main';
import Hero from '../components/layouts/index/Hero';
import AboutMe from '../components/layouts/index/AboutMe';
import HighlightedProjects from '../components/layouts/index/HighlightedProjects';
import { devices } from '../hooks/viewport';

const Container = styled(Main)`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.gap};

    @media screen and (${devices.desktop}) {
        gap: ${({ theme }) => theme.spacing.doubleGap};
    }
`;

export default function Home() {

    return (
        <Container>
            <Hero />
            <AboutMe />
            <HighlightedProjects />
        </Container>
    )
}