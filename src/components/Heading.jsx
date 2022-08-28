import { motion } from 'framer-motion';
import React from 'react';
import { forwardRef } from 'react';
import styled from 'styled-components';

const Wrapper = styled.h1.attrs(({ size }) => (
    size ?
        { as: `h${size}` } :
        null
))`
    color: ${({ theme }) => theme.fontColor};
    text-transform: capitalize;
`;

export function Heading(props) {
    // className for styled component
    const { size, children, transform, className } = props;

    return (
        <Wrapper
            size={size}
            className={className}
            $transform={transform}>
            {children}
        </Wrapper>
    )
}

export const MotionHeading = forwardRef((props, ref) => {
    const { size, children, transform, className } = props;
    return (
        <Wrapper
            size={size}
            className={className}
            $transform={transform}
            ref={ref}>
            {children}
        </Wrapper>
    )
});