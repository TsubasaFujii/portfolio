import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';
import { ThemeContext } from './styles/ContextProviders';

const Wrapper = styled.h1.attrs(({ size }) => (
    size ?
        { as: `h${size}` } :
        null
))`
    text-transform: capitalize;
`;

const H2Wrapper = styled(motion.h2)`
    width: 100%;
    position: relative;
    top: 0;
    
    text-transform: capitalize;
    text-transform: uppercase;
    text-align: left;
`;

const H3Wrapper = styled(motion.h3)`
    position: relative;
    right: ${({ theme }) => `-${theme.spacing.sm}`};
    padding-right: ${({ theme }) => `calc(${theme.spacing.sm} + 0.5em)`};
    color: ${({ theme }) => theme.fontColor};
    text-transform: capitalize;
    text-align: left;
`;

const expand = keyframes`
    0% {
        transform: scaleX(0%);
    }
    100% {
      transform: scaleX(100%) skew(-12deg);
    }
`;

const AnimatedUnderline = styled(motion.span)`
    position: relative;
    overflow: hidden;

    &:before {
        content: '';
        height: 0.5em;
        width: 100%;
        display: block;
        
        position: absolute;
        left: 0;
        bottom: 0;
        // HEX 45% = 73
        background: ${({ theme }) => `${theme.colors.primary50}73`};
        z-index: -1;
    }

    &.shown:before {
        animation: ${expand} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
    }
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

Heading.propTypes = {
    size: PropTypes.number,
    children: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.string,
    ]),
    transform: PropTypes.string,
    className: PropTypes.string,
};

const headingMotion = {
    visible: { x: '-1rem', opacity: 1 },
    hidden: { x: 0, opacity: 0 }
}

export function H2(props) {
    const { isVisible, children } = props;
    const { currentTheme } = useContext(ThemeContext);

    return (
        <H2Wrapper
            $currentTheme={currentTheme}
            animate={isVisible ? 'visible' : 'hidden'}
            variants={headingMotion}
            transition={{
                ease: 'linear',
                duration: 0.2
            }}
        >
            {children}
        </H2Wrapper>
    )
}

H2.propTypes = {
    isVisible: PropTypes.bool,
    children: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.string,
    ]),
};

export function H3(props) {
    const { children, isVisible } = props;
    return (
        <H3Wrapper
            initial={{ left: 0, }}
            animate={{
                opacity: isVisible ? 1 : 0,
            }}>
            <AnimatedUnderline className={isVisible ? 'shown' : null}>{children}</AnimatedUnderline>
        </H3Wrapper>
    )
}

H3.propTypes = {
    isVisible: PropTypes.bool,
    children: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.string,
    ]),
};