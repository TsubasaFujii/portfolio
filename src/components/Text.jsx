import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useInView } from 'react-intersection-observer';

const TextWrapper = styled(motion.p)`
    color: ${({ theme }) => theme.fontColor};
    line-height: 1.5em;
    &:not(:only-of-type) {
        margin-top: 1.3rem;
    }
`;

export const NewLine = styled(motion.span)`
    display: block;
`;

export function Text(props) {
    const { children } = props;
    const { ref, inView } = useInView({
        initialInView: false,
        threshold: 0.3,
    });

    return (
        <TextWrapper
            ref={ref}
            animate={{
                opacity: inView ? 1 : 0,
                y: inView ? 0 : '-1rem',
                transition: {
                    duration: 0.3
                }
            }}>
            {children}
        </TextWrapper>
    )
}

Text.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.string,
    ]),
};