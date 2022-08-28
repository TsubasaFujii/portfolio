import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import profile from '../../assets/profile.png';


const Wrapper = styled.section`
    min-height: 100vh;
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: ${({ theme }) => theme.spacing.sm};
`;

const AnimatedHeading = styled(motion.h2)`
    position: absolute;
    top: 0;
    text-transform: uppercase;
`;

const NewLine = styled(motion.span)`
    display: block;
`;

const ImageWrapper = styled.div`
    height: 70vmin;
    width: 70vmin;
    position: relative;

    ::after {
        content: ' ';
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        
        clip-path: circle(45% at center 55%);
        background-color: ${({ theme }) => theme.colors.primary};
    }
`;

const Image = styled(motion.img)`
    width: 70vmin;
    z-index: 90;

    position: absolute;
    clip-path: url(#clipPathLower);
`;

const Paragraph = styled(motion.p)`
    margin-top: 1rem;
    line-height: 1.3em;

    &:first-of-type {
        margin-top: 0;
    }
`;

function AboutMeHeading(props) {
    const { isVisible } = props;

    return (
        <AnimatedHeading
            animate={{
                left: isVisible ? '-1.5rem' : 0,
                opacity: isVisible ? 1 : 0,
            }}
            transition={{
                ease: 'linear',
                duration: 0.2
            }}
        >
            <NewLine>about</NewLine>
            <NewLine>me</NewLine>
        </AnimatedHeading >
    )
}

function ProfileImage(props) {
    const { isVisible } = props;

    return (
        <ImageWrapper>
            <Image
                src={profile}
                alt='my profile'
                animate={{
                    top: isVisible ? 0 : '-2rem',
                    opacity: isVisible ? 1 : 0,
                }} />
            <svg width="0" height="0" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <clipPath id="clipPathLower" clipPathUnits="objectBoundingBox">
                        <path d="M1,0 H0 V0.5 C0,0.776,0.224,1,0.5,1 C0.776,1,1,0.776,1,0.5 V0" />
                    </clipPath>
                    <clipPath id="clipPathUpper" clipPathUnits="objectBoundingBox">
                        <path d="M0,1 H1 V0.5 C1,0.224,0.776,0,0.5,0 C0.224,0,0,0.224,0,0.5 V1" />
                    </clipPath>
                </defs>
            </svg>
        </ImageWrapper>
    )
}

function Introduction() {
    return (
        <div>
            <Paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus.
            </Paragraph>
            <Paragraph>
                Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna.
            </Paragraph>
            <Paragraph>
                Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
            </Paragraph>
        </div>
    );
}

export default function AboutMe(props) {
    const { isVisible } = props;

    return (
        <Wrapper>
            <AboutMeHeading isVisible={isVisible} />
            <ProfileImage isVisible={isVisible} />
            <Introduction />
        </Wrapper >

    )
}
