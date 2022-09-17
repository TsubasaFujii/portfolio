import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const TextWrapper = styled(motion.p)`
    color: ${({ theme }) => theme.fontColor};
    line-height: 1.5em;
    &:not(:only-of-type) {
        margin-top: 1.3rem;
    }
`;

export const NewLine = styled(motion.span)`
    display: inline-block;
`;

export function Text(props) {
    const { children } = props;
    const ref = useRef(null);
    const isInView = useInView(ref);

    return (
        <TextWrapper
            ref={ref}
            animate={{
                opacity: isInView ? 1 : 0,
                y: isInView ? 0 : '-1rem',
                transition: {
                    duration: 0.5
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