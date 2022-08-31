import { motion } from 'framer-motion';
import React from 'react';
import { useContext } from 'react';
import { forwardRef } from 'react';
import styled from 'styled-components';
import { ThemeContext } from './styles/ContextProviders';

const Wrapper = styled.h1.attrs(({ size }) => (
    size ?
        { as: `h${size}` } :
        null
))`
    color: ${({ theme }) => theme.fontColor};
    text-transform: capitalize;
`;

const headingMotion = {
    visible: { left: '-1.5rem', opacity: 1 },
    hidden: { left: 0, opacity: 0 }
}

const H2Wrapper = styled(motion.h2)`
    color: ${({ theme }) => theme.fontColor};
    text-transform: capitalize;
    position: absolute;
    top: 0;
    text-transform: uppercase;
    color: ${({ theme, $currentTheme }) =>
        $currentTheme === 'dark' ? theme.colors.white : theme.colors.black};
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

export function H2(props) {
    const { isVisible, children } = props;
    const { currentTheme } = useContext(ThemeContext);

    return (
        <H2Wrapper
            $currentTheme={currentTheme}
            animate={isVisible ? "visible" : "hidden"}
            variants={headingMotion}
            transition={{
                ease: 'linear',
                duration: 0.2
            }}
        >
            {children}
        </H2Wrapper>
    )
};