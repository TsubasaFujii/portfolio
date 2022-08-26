import React from 'react';
import { cloneElement, useContext } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { ScreenSizeContext, ThemeContext } from './styles/ContextProviders';

const Wrapper = styled(motion.button)`
    align-self: ${({ align }) => align ? align : 'center'};

    // 0.6 : 1
    padding: ${({ theme }) => `1.25rem ${theme.spacing.md}`};

    box-shadow: ${({ mode }) =>
        `4px 4px 8px rgba(${mode === 'dark' ? '102, 96, 85, 0.5' : '26, 13, 6, 0.2'}), ` +
        `-4px -4px 8px ${mode === 'dark' ? 'rgba(102, 96, 85, 0.8)' : '#FFFFFF'}`
    };
    border: none;
    // (vertical paddings * 2 + font-size) /2
    border-radius: calc((1.25rem + 1.25rem + 1.3em) / 2);
    background: ${({ theme }) => theme.colors.primary50};

    text-transform: capitalize;

    &:hover {
        background: ${({ theme }) => theme.colors.primary70};
    }

    &:disabled {
        // 99 = HEX opacity 60%
        background: ${({ theme, mode }) =>
        mode === 'dark' ?
            `${theme.colors.grey}99` :
            theme.colors.black20
    };
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
    const { label, disabled, icon, align } = props;
    const mode = useContext(ThemeContext);
    const screenSize = useContext(ScreenSizeContext);

    return (
        <Wrapper
            align={align}
            mode={mode}
            disabled={disabled}
            initial={'init'}
            whileHover={'hover'}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}>
            <Content>
                <Label text={label} />
                {screenSize === 'sm' ? cloneElement(icon) : <Icon icon={icon} />}
            </Content>
        </Wrapper>
    )
}
