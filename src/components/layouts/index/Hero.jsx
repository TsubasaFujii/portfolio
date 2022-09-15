import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import styled, { useTheme } from 'styled-components';
import PropTypes from 'prop-types';

import Button from '../../Button';
import { Icon } from '../../Icon';
import { scrollTo } from '../../../js/window';
import { selfIntroduction } from '../../../data/content';

const Wrapper = styled.section`
    min-height: ${({ $headerHeight }) => `calc(100vh - ${$headerHeight}px)`};
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: ${({ theme }) => theme.spacing.md};
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

const BackgroundWrapper = styled(motion.div)`
    width: 100vw;

    z-index: -1;
    position: absolute;
    top: 0;
    left: ${({ theme }) => `-${theme.spacing.md}`};
`;

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
                prev === selfIntroduction.keywords.length - 1 ? 0 : prev + 1
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
                {selfIntroduction.keywords[current]}
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
            <motion.span className='intro'>
                and <WordLoop />
            </motion.span>
        </motion.div>
    )
}

function BackgroundLayer() {
    const theme = useTheme();

    return (
        <BackgroundWrapper>
            <svg
                viewBox='0 0 100 100'
                xmlns='http://www.w3.org/2000/svg'
                fill={theme.colors.primary}
                className='bg1'>
                <motion.circle
                    initial={{
                        y: '-100%',
                        x: '-100%',
                        scale: 0.1,
                    }}
                    animate={{
                        y: 0,
                        x: '50%',
                        scale: 1,
                        transition: { type: 'spring', stiffness: 100 }
                    }}
                    viewport={{ once: true }}
                    cx='50'
                    cy='50'
                    r='50' />
            </svg>
        </BackgroundWrapper>
    );
}

BackgroundLayer.propTypes = {
    headerHeight: PropTypes.number
};

export default function Hero() {
    const [headerHeight, setHeaderHeight] = useState(null);

    function handleOnClick() {
        scrollTo('#projects');
    }

    useEffect(() => {
        const header = document.querySelector('header');

        function handleResize() {
            setHeaderHeight(header.clientHeight);
        }

        setHeaderHeight(header.clientHeight);

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <Wrapper $headerHeight={headerHeight}>
            <HeroHeading />
            <SubHeading />
            <Button
                label='Check my projects'
                align='flex-start'
                icon={<Icon name='chevronDown' />}
                onClick={handleOnClick} />
            <BackgroundLayer />
        </Wrapper >
    )
}