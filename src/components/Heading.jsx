import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
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