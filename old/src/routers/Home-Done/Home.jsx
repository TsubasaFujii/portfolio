import AboutMe from './blocks/AboutMe';
import Hero from './blocks/Hero';
import HighlightedProjects from './blocks/HighlightedProjects';

import { Main } from './styled';

export default function Home() {
    return (
        <Main>
            <Hero />
            <AboutMe />
            <HighlightedProjects />
        </Main>
    )
}