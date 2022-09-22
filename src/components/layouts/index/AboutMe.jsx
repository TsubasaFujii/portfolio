import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import { H2, Heading } from '../../Heading';
import { NewLine, Text } from '../../Text';
import Image from '../../Image';
import { SectionRef } from '../../Section';
import { Content } from '../../Content';
import { FlexColumn } from '../../Flex';
import { GroupedIcons } from '../../Icon';

import { projectsData, selfIntroduction } from '../../../data/content';
import { devices } from '../../../hooks/viewport';

import profile from '../../../assets/images/profile.webp';

const TOOLS = projectsData
    .reduce((result, current) => result.concat(current.tools), [])
    .filter((tool, i, arr) => arr.indexOf(tool) === i);

const Wrapper = styled(SectionRef)`
    align-items: center;
`;

const ContentWrapper = styled(FlexColumn)`
    @media screen and (${devices.tablet}) {
        padding: ${({ theme }) => `0 ${theme.spacing.md}`};
    }

    @media screen and (${devices.desktopL}) {
        display: grid;
        grid-template-columns: auto 1fr;
        grid-template-rows: repeat(2, auto);
        align-items: center;

        & > div[role="img"] {
            grid-row: 1 / span 2;
            grid-column: 1 / span 1;
        }

        & > div.introduction {
            grid-row: 1 / span 1;
            grid-column: 2 / span 1;
        }

        & :last-child {
            grid-column: 2 / span 1;
            grid-row: 2 / span 1;
            
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

function Introduction(props) {
    const { isVisible } = props;

    return (
        <ContentWrapper>
            <Image isVisible={isVisible} src={profile} alt='my profile' clipped />
            <motion.div initial='hidden' className='introduction'>
                <Heading size={4}>{selfIntroduction.subHeading}</Heading>
                {
                    selfIntroduction.body.map((paragraph, index) =>
                        <Text key={index}>{paragraph}</Text>)
                }
            </motion.div>
            <GroupedIcons names={TOOLS} />
        </ContentWrapper>
    )
}

Introduction.propTypes = {
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
            <Content>
                <AboutMeHeading isVisible={isVisible} />
                <Introduction isVisible={isVisible} />
            </Content>
        </Wrapper >

    )
}
