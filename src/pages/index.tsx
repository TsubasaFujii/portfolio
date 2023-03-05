import { Inter } from 'next/font/google'
import Hero from '@/components/templates/home/Hero';
import AboutMe from '@/components/templates/home/AboutMe';
import HighlightedProjects from '@/components/templates/home/HighlightedProjects';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (
        <main>
            <Hero />
            <AboutMe />
            <HighlightedProjects />
        </main>
    )
}
