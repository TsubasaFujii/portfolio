import React from 'react';

import AboutMe from './blocks/AboutMe';
import Hero from './blocks/Hero';
import HighlightedProjects from './blocks/HighlightedProjects';

import { Container } from './styled';

export default function Home() {
    return (
        <Container>
            <Hero />
            <AboutMe />
            <HighlightedProjects />
        </Container>
    )
}