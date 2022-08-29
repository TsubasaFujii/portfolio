import { motion } from 'framer-motion';
import React from 'react';
import { forwardRef } from 'react';
import styled from 'styled-components';
import { useParallaxElement } from '../../hooks/parallax';

import Button from '../Button';
import { Heading } from '../Heading';
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
`;

const NewLine = styled(motion.span)`
    display: block;
`;

export default function Hero(props) {
    const { headerHeight } = props;

    return (
        <Wrapper headerHeight={headerHeight}>
            <Heading>
                <NewLine
                    initial={{
                        y: '10vh',
                        opacity: 0,
                    }}
                    whileInView={{
                        y: 0,
                        opacity: 1
                    }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.4,
                    }}>
                    Hello,
                </NewLine>
                <NewLine
                    initial={{
                        y: '10vh',
                        opacity: 0,
                    }}
                    whileInView={{
                        y: 0,
                        opacity: 1
                    }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.4,
                        delay: 0.2,
                    }}>
                    I'm
                </NewLine>
                <NewLine
                    initial={{
                        y: '10vh',
                        opacity: 0,
                    }}
                    whileInView={{
                        y: 0,
                        opacity: 1
                    }}
                    transition={{
                        duration: 0.4,
                        delay: 0.3,
                    }}>
                    Tsubasa
                </NewLine>
            </Heading>
            <Heading size={4}>Frontend developer</Heading>
            <Button
                label='Check my projects'
                icon={<Icon name='chevronDown' />} />
        </Wrapper >
    )
}
