import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import profile from '../../../assets/profile.png';
import { H2, Heading } from '../../Heading';
import { NewLine, Text } from '../../Text';
import { devices } from '../../../hooks/viewport';
import Image from '../../Image';
import { selfIntroduction } from '../../../data/content';
import { FlexColumn } from '../../Flex';
import { SectionRef } from '../../Section';

const Wrapper = styled(SectionRef)`
    align-items: center;
`;

const ContentWrapper = styled(FlexColumn)`
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
        <ContentWrapper>
            <Image isVisible={isVisible} src={profile} alt='my profile' clipped />
            <Introduction />
        </ContentWrapper>
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
