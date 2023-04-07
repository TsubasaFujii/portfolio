import AboutMe from './AboutMe';
import Hero from './Hero';
import HighlightedProjects from './HighlightedProjects';
import { Wrapper } from './styled';

export default function Home() {
    return (
        <Wrapper>
            <Hero />
            <AboutMe />
            <HighlightedProjects />
        </Wrapper>
    )
}