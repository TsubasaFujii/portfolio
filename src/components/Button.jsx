import React from 'react';
import { cloneElement, useContext } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { ScreenSizeContext, ThemeContext } from './styles/ContextProviders';

const Wrapper = styled(motion.button)`
    align-self: ${({ align }) => align ? align : 'center'};

    // 0.6 : 1
    padding: ${({ theme }) => `1.25rem ${theme.spacing.md}`};

    box-shadow: ${({ $flat, $currentTheme }) =>
        $flat ? 'none' :
            `4px 4px 8px rgba(${$currentTheme === 'dark' ? '102, 96, 85, 0.5' : '26, 13, 6, 0.2'}), ` +
            `-4px -4px 8px ${$currentTheme === 'dark' ? 'rgba(102, 96, 85, 0.8)' : '#ffffff7d'}`
    };
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
            theme.colors.disabled
    };
        box-shadow: none;
    }
`;

const ContentWrapper = styled(motion.div)`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    gap: 0.6rem;
`;

const IconWrapper = styled(motion.div)`
    flex: 1;
    min-width:0;
    overflow:hidden;
`;

const iconMotion = {
    init: {
        opacity: 0,
    },
    hover: {
        opacity: 1,
    },
};

function Icon(props) {
    const { icon } = props;
    return (
        <IconWrapper
            transition={{ type: 'spring' }}
            variants={iconMotion}>
            {cloneElement(icon)}
        </IconWrapper>
    );
}

const labelMotion = {
    init: {
        flex: '1 1 calc(100% + 0.6rem)',
    },
    hover: {
        flex: '0 1 content',
    },
};

function Label(props) {
    const { text } = props;
    return (
        <motion.div
            variants={labelMotion}>
            {text}
        </motion.div>
    );
}

function Content({ children }) {
    return (
        <ContentWrapper>
            {children}
        </ContentWrapper>
    );
}

export default function Button(props) {
    const { label, disabled, icon, align, onClick, flat } = props;
    const { currentTheme } = useContext(ThemeContext);
    const screenSize = useContext(ScreenSizeContext);

    return (
        <Wrapper
            align={align}
            $currentTheme={currentTheme}
            disabled={disabled}
            initial={'init'}
            whileHover={!disabled && 'hover'}
            whileTap={!disabled && { scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            onClick={onClick}
            $flat={flat}>
            <Content>
                <Label text={label} />
                {screenSize === 'sm' ? cloneElement(icon) : <Icon icon={icon} />}
            </Content>
        </Wrapper>
    )
}
