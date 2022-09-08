import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import profile from '../../assets/profile.png';
import { H2, Heading } from '../Heading';
import Text from '../Text';
import { devices } from '../../hooks/viewport';


const Wrapper = styled.section`
    min-height: 100vh;
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: ${({ theme }) => theme.spacing.md};
`;

const Flex = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: ${({ theme }) => theme.spacing.md};
    
    @media screen and (${devices.tablet}) {
        padding: ${({ theme }) => `0 ${theme.spacing.md}`};
    }

    @media screen and (${devices.desktopL}) {
        flex-direction: row;

        & > div.introduction {
            flex: 1;
        }
    }
`;

const NewLine = styled(motion.span)`
    display: block;
`;

const ImageWrapper = styled(motion.div)`
    height: 70vmin;
    width: 70vmin;
    position: relative;

    &:after {
        content: ' ';
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        
        clip-path: circle(5% at center 55%);
        background-color: ${({ theme }) => theme.colors.primary};
        transition: clip-path 0.3s;
    }

    &.isVisible:after {
        clip-path: circle(45% at center 55%);
    }

    @media screen and (${devices.mobileL}) {
        height: 30vmin;
        width: 30vmin;
    }

    @media screen and (${devices.desktop}) {
        height: 40vmin;
        width: 40vmin;
    }
`;

const Image = styled(motion.img)`
    width: 70vmin;
    z-index: 90;

    position: absolute;
    clip-path: url(#clipPathLower);

    @media screen and (${devices.mobileL}) {
        width: 30vmin;
    }

    @media screen and (${devices.desktop}) {
        width: 40vmin;
    }
`;

function AboutMeHeading(props) {
    const { isVisible } = props;

    return (
        <H2 isVisible={isVisible}>
            <NewLine>about</NewLine>
            <NewLine>me</NewLine>
        </H2>
    )
}

AboutMeHeading.propTypes = {
    isVisible: PropTypes.bool
};

function ProfileImage(props) {
    const { isVisible } = props;

    return (
        <ImageWrapper className={isVisible ? 'isVisible' : null}>
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

ProfileImage.propTypes = {
    isVisible: PropTypes.bool
};

function Introduction() {
    return (
        <motion.div initial='hidden' className='introduction'>
            <Heading size={4}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Heading>
            <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus.
            </Text>
            <Text>
                Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna.
            </Text>
            <Text>
                Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
            </Text>
        </motion.div>
    );
}

function Content(props) {
    const { isVisible } = props;
    return (
        <Flex>
            <ProfileImage isVisible={isVisible} />
            <Introduction />
        </Flex>
    )
}

Content.propTypes = {
    isVisible: PropTypes.bool
};

export default function AboutMe() {
    const [isVisible, setIsVisible] = useState(false);
    const { ref, entry } = useInView({
        initialInView: false,
        threshold: 0.2,
    });

    useEffect(() => {
        if (!entry) return;
        setIsVisible(entry.isIntersecting);
    }, [entry]);

    return (
        <Wrapper ref={ref}>
            <AboutMeHeading isVisible={isVisible} />
            <Content isVisible={isVisible} />
        </Wrapper >

    )
}
