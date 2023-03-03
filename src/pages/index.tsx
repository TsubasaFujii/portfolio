import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Hero from '@/components/templates/home/Hero';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (
        <main>
            <Hero />
            {/*             <AboutMe />
            <HighlightedProjects /> */}
        </main>
    )
}
