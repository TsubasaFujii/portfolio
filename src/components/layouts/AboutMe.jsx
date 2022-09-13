import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import profile from '../../assets/profile.png';
import { H2, Heading } from '../Heading';
import Text from '../Text';
import { devices } from '../../hooks/viewport';
import Image from '../Image';
import { selfIntroduction } from '../../data/content';


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

    & img {
        width: 70vw;
        @media screen and (${devices.mobileL}) {
            width: max(30vw, 20rem);
        }

        @media screen and (${devices.desktop}) {
            width: min(25vw, 20rem);
        }
    }
`;

const NewLine = styled(motion.span)`
    display: block;
`;
/* 
const ImageWrapper = styled(motion.div)`
    height: 70vmin;
    width: 70vmin;
    position: relative;

    &:after {
        content: ' ';
        width: 10%;
        height: 10%;
        position: absolute;
        // (100% - width(%)) / 2
        top: 45%;
        // (100% - height(%)) / 2
        left: 45%;
        border-radius: 50%;
        background-color: ${({ theme }) => theme.colors.primary};
        transition: all 0.25s cubic-bezier(0.55, 0.06, 0.68, 0.19);
    }

    &.isVisible:after {
        width: 90%;
        height: 90%;
        position: absolute;
        // 100% - width(%)
        top: 10%;
        // (100% - height(%)) / 2
        left: 5%;
    }

    @media screen and (${devices.mobileL}) {
        height: max(30vmin, 20rem);
        width: max(30vmin, 20rem);
    }

    @media screen and (${devices.desktop}) {
        height: min(30vmin, 25rem);
        width: min(30vmin, 25rem);
    }
`;

const Image = styled(motion.img)`
    width: 70vmin;
    z-index: 90;

    position: absolute;
    clip-path: url(#clipPathLower);

    @media screen and (${devices.mobileL}) {
        width: max(30vmin, 20rem);
    }

    @media screen and (${devices.desktop}) {
        width: min(30vmin, 25rem);
    }
`; */

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

/* function ProfileImage(props) {
    const { isVisible } = props;

    return (
        <ImageWrapper className={isVisible ? 'isVisible' : null}>
            <Image
                src={profile}
                alt='my profile'
                animate={{
                    y: isVisible ? 0 : '-2rem',
                    opacity: isVisible ? 1 : 0,
                    transitionDelay: '0.1s',
                    transitionDuration: '0.2s'
                }} />
            <svg width="0" height="0" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <clipPath id="clipPathLower" clipPathUnits="objectBoundingBox">
                        <path d="M1,0 H0 V0.5 C0,0.776,0.224,1,0.5,1 C0.776,1,1,0.776,1,0.5 V0" />
                    </clipPath>
                </defs>
            </svg>
        </ImageWrapper>
    )
} */

function Introduction() {
    return (
        <motion.div initial='hidden' className='introduction'>
            <Heading size={4}>{selfIntroduction.subHeading}</Heading>
            {selfIntroduction.body.map((paragraph, index) => <Text key={index}>{paragraph}</Text>)}
        </motion.div>
    );
}

function Content(props) {
    const { isVisible } = props;
    return (
        <Flex>
            <Image isVisible={isVisible} img={profile} alt='my profile' clipped />
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
