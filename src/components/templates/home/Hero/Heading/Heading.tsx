
import { headingText } from '@/static/content';
import { NewLine } from '@/components/common';

import { H1, Letter } from './styled';

// Motions
const headingMotion = {
    visible: {
        transition: {
            staggerChildren: 0.2
        }
    }
}

const lineMotion = {
    visible: {
        transition: {
            staggerChildren: 0.02,
        }
    }
}

const letterMotion = {
    initial: {
        opacity: 0,
        y: '50%',
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: 'spring',
            stiffness: 50
        }
    }
}

export function Heading() {
    return (
        <H1
            variants={headingMotion}
            initial='initial'
            animate='visible'>
            {headingText.map((word) => (
                <NewLine
                    key={word}
                    variants={lineMotion}>
                    {
                        [...word].map((letter, index) => (
                            <Letter
                                key={index}
                                variants={letterMotion}>
                                {letter}
                            </Letter>
                        ))
                    }
                </NewLine>
            ))
            }
        </H1>
    )
}