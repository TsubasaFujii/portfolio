import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Wrapper = styled(motion.button)`
    align-self: ${({ align }) => align ? align : 'center'};

    // 0.6 : 1
    padding: ${({ theme }) => `1.25rem ${theme.spacing.md}`};

    box-shadow: ${({ $flat, $currentTheme }) =>
        $flat ? 'none' :
            `4px 4px 8px rgba(${$currentTheme === 'dark' ? '102, 96, 85, 0.5' : '241, 110, 40, 0.2'}), ` +
            `-4px -4px 8px rgba(${$currentTheme === 'dark' ? '102, 96, 85, 0.8' : '255, 255, 255, 0.5'})`};
    border: ${({ theme, $secondary }) =>
        $secondary ?
            `0.1rem solid ${theme.colors.primary70}` :
            'none'};
    // (vertical paddings * 2 + font-size) /2
    border-radius: calc((1.25rem + 1.25rem + 1.3em) / 2);
    background: ${({ theme, $secondary }) =>
        $secondary ?
            theme.colors.white :
            theme.colors.primary50};

    text-transform: capitalize;
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
        background: ${({ theme, $secondary }) =>
        $secondary ? theme.colors.primary20 : theme.colors.primary70};
        border-color: transparent;
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

export const ContentWrapper = styled(motion.div)`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.6rem;
`;

export const IconWrapper = styled(motion.div)`
    min-width:0;
`;

export const iconMotion = {
    hidden: {
        opacity: 0,
    },
    hover: {
        opacity: 1,
    },
};

export const LabelWrapper = styled(motion.div)`
    color: ${({theme}) => theme.colors.black};
`;