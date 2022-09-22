import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import styled, { useTheme } from 'styled-components';
import PropTypes from 'prop-types';

import { scrollTo } from '../../../js/window';

import { Button } from '../../Button';
import { SectionRef } from '../../Section';
import { NewLine } from '../../Text';
import { Content } from '../../Content';

import { headingText, selfIntroduction } from '../../../data/content';
import { useInView } from 'react-intersection-observer';

const Wrapper = styled(SectionRef)`
    min-height: ${({ $headerHeight }) => `calc(100vh - ${$headerHeight}px)`};
    box-sizing: content-box;
    padding-top:    ${({ $headerHeight }) => `${$headerHeight}px`};
    top: ${({ $headerHeight }) => `-${$headerHeight}px`};
    place-content: normal;
`;

const ContentWrapper = styled(Content)`
    align-items: flex-start;
`;

const Letter = styled(motion.span)`
    display: inline-block;
`;

const H1 = styled(motion.h1)`
    display: flex;
    flex-direction: column;
`;

const BackgroundWrapper = styled(motion.div)`
    width: 100%;
    height: 100%;

    position: absolute;
    z-index: -1;
    overflow: visible;

    & svg {
        width: 100%;
        height: 100%;
    }
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
        <motion.div initial='initial' animate='visible' variants={subMotion} className='intro'>
            <motion.div variants={subMotion}>Frontend developer</motion.div>
            <motion.span>
                and <WordLoop />
            </motion.span>
        </motion.div>
    )
}

function BackgroundLayer(props) {
    const { headerHeight, isVisible } = props;
    const theme = useTheme();

    return (
        <BackgroundWrapper $headerHeight={headerHeight}>
            <svg
                viewBox='0 0 100 100'
                xmlns='http://www.w3.org/2000/svg'>
                <motion.circle
                    fill={theme.colors.primary}
                    initial={{
                        cx: 0,
                        cy: 0,
                        scale: 0.5,
                    }}
                    animate={{
                        cx: isVisible ? '80%' : 0,
                        cy: isVisible ? '55%' : 0,
                        scale: 1,
                        transition: {
                            default: {
                                type: 'spring',
                                damping: 4,
                                stiffness: 100,
                                restDelta: 0.1,
                            },
                            scale: {
                                duration: 0.5,
                            }
                        },
                    }}
                    cx='50%'
                    cy='50%'
                    r='40%' />
            </svg>
        </BackgroundWrapper>

    );
}

BackgroundLayer.propTypes = {
    isVisible: PropTypes.bool,
    headerHeight: PropTypes.number,
};

export default function Hero() {
    const [headerHeight, setHeaderHeight] = useState(null);
    const { ref, inView } = useInView({
        initialInView: true,
    });

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
        <Wrapper $headerHeight={headerHeight} ref={ref}>
            <ContentWrapper>
                <HeroHeading />
                <SubHeading />
                <Button
                    label='Check my projects'
                    align='flex-start'
                    icon='chevronDown'
                    onClick={handleOnClick} />
            </ContentWrapper>
            <BackgroundLayer isVisible={inView} headerHeight={headerHeight} />
        </Wrapper >
    )
}