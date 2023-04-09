import { motion } from 'framer-motion';
import styled, { keyframes } from 'styled-components';

export const Wrapper = styled.h1.attrs<{ $size?: number; }>(({ $size }) => (
    $size ?
        { as: `h${$size}` } :
        null
)) <{ $size?: number; }>`
    text-transform: capitalize;
`;

export const H2Wrapper = styled(motion.h2)`
    width: 100%;
    position: relative;
    top: 0;
    
    text-transform: capitalize;
    text-transform: uppercase;
    text-align: left;
`;

export const H3Wrapper = styled(motion.h3)`
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

export const AnimatedUnderline = styled(motion.span)`
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