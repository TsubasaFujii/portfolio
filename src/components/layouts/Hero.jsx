import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components';

import Button from '../Button';
import Icon from '../Icon';

const Wrapper = styled.section`
    min-height: ${({ headerHeight }) => `calc(100vh - ${headerHeight}px)`};
    padding-left: ${({ theme }) => theme.spacing.md};
    margin-top: ${({ headerHeight }) => `${headerHeight}px`};

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: ${({ theme }) => theme.spacing.md};

    color: ${({ theme }) => theme.fontColor};
`;

const NewLine = styled(motion.span)`
    display: inline-block;
`;

const Letter = styled(motion.span)`
    display: inline-block;
`;

const H1 = styled(motion.h1)`
    display: flex;
    flex-direction: column;
`;

const Sub = styled(motion.span)`
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 400;
    font-size: 1rem;
`;

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
            type: "spring",
            stiffness: 50
        }
    }
}

const headingText = ['Hello,', 'I\'m', 'Tsubasa.'];

function HeroHeading() {
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

const subText = [
    'foodie',
    'cat lover',
    'traveler'
];

const infoMotion = {
    show: {
        opacity: 1,
        transition: {
            duration: 1
        }
    },
    hidden: {
        opacity: 0,
        transition: {
            duration: 0.02
        },
    }
};


function WordLoop() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        function switchText() {
            setCurrent(prev =>
                prev === subText.length - 1 ? 0 : prev + 1
            );
        }
        const intervalId = setInterval(switchText, 2500);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <AnimatePresence mode='wait'>
            <motion.span
                key={current}
                initial='hidden'
                animate='show'
                exit='hidden'
                variants={infoMotion}
            >
                {subText[current]}
            </motion.span>
        </AnimatePresence>
    )
}

const subMotion = {
    initial: {
        y: '100%'
    },
    visible: {
        y: 0,
        transition: {
            duration: 0.5
        }
    }
};

function SubHeading() {
    return (
        <motion.div initial='initial' animate='visible' variants={subMotion}>
            <motion.h5 variants={subMotion}>Frontend developer</motion.h5>
            <Sub className='intro'>
                and <WordLoop />
            </Sub>
        </motion.div>
    )
}

export default function Hero(props) {
    const { headerHeight } = props;

    function handleOnClick() {
        const projectEl = document.querySelector('#projects');
        projectEl.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }

    return (
        <Wrapper headerHeight={headerHeight}>
            <HeroHeading />
            <SubHeading />
            <Button
                label='Check my projects'
                icon={<Icon name='chevronDown' />}
                onClick={handleOnClick} />
        </Wrapper >
    )
}
