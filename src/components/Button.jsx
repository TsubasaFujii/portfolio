import React from 'react';
import { cloneElement, useContext } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { ThemeContext } from './styles/ContextProviders';

const Wrapper = styled(motion.button)`
    align-self: ${({ align }) => align ? align : 'center'};

    // 0.6 : 1
    padding: ${({ theme }) => `1.25rem ${theme.spacing.md}`};

    box-shadow: ${({ $flat, $currentTheme }) =>
        $flat ? 'none' :
            `4px 4px 8px rgba(${$currentTheme === 'dark' ? '102, 96, 85, 0.5' : '241, 110, 40, 0.2'} ), ` +
            `-4px -4px 8px ${$currentTheme === 'dark' ? 'rgba(102, 96, 85, 0.8)' : '#ffffff7d'}`};
    border: none;
    // (vertical paddings * 2 + font-size) /2
    border-radius: calc((1.25rem + 1.25rem + 1.3em) / 2);
    background: ${({ theme }) => theme.colors.primary50};

    text-transform: capitalize;
    cursor: pointer;

    &:hover {
        background: ${({ theme }) => theme.colors.primary70};
    }

    &:disabled {
        // 99 = HEX opacity 60%
        background: ${({ theme, $currentTheme }) =>
        $currentTheme === 'dark' ?
            `${theme.colors.grey}99` :
            theme.colors.disabled};
        box-shadow: none;
        cursor: not-allowed;
    }
`;

const ContentWrapper = styled(motion.div)`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.6rem;
`;

const IconWrapper = styled(motion.div)`
    min-width:0;
`;

const iconMotion = {
    hidden: {
        opacity: 0,
    },
    hover: {
        opacity: 1,
    },
};

function ButtonIcon(props) {
    const { icon } = props;
    return (
        <IconWrapper
            variants={iconMotion}
            layout>
            {cloneElement(icon)}
        </IconWrapper>
    );
}

ButtonIcon.propTypes = {
    icon: PropTypes.element,
};

// calc((1.5rem + 0.6rem) /2) 1.5rem = icon width & gap
const labelMotion = {
    hidden: {
        x: 'calc((1.5rem + 0.6rem) /2)',
    },
    hover: {
        x: 0,
    },
};

function Label(props) {
    const { text } = props;
    return (
        <motion.div
            transition={{
                duration: 0.3,
            }}
            variants={labelMotion}>
            {text}
        </motion.div>
    );
}

Label.propTypes = {
    text: PropTypes.string,
};

export default function Button(props) {
    const { label, disabled, icon, align, onClick, flat } = props;
    const { currentTheme, pointingMethod } = useContext(ThemeContext);

    return (
        <Wrapper
            align={align}
            $currentTheme={currentTheme}
            disabled={disabled}
            initial={'hidden'}
            whileHover={!disabled && 'hover'}
            whileTap={!disabled && { scale: 0.9 }}
            onClick={onClick}
            $flat={flat}>
            <ContentWrapper>
                {pointingMethod === 'touch' ? label : <Label text={label} />}
                {pointingMethod === 'touch' ? cloneElement(icon) : <ButtonIcon icon={icon} />}
            </ContentWrapper>
        </Wrapper>
    )
}

Button.propTypes = {
    label: PropTypes.string,
    disabled: PropTypes.bool,
    icon: PropTypes.element,
    align: PropTypes.string,
    onClick: PropTypes.func,
    flat: PropTypes.bool
};