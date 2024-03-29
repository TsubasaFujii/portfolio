import styled from 'styled-components';
import { motion } from 'framer-motion';
import { devices } from '@/static/viewport';

export const Wrapper = styled(motion.div).attrs(() => ({
    role: 'img'
})) <{ $clickable?: boolean; }>`
    height: 70vmin;
    width: 70vmin;
    
    margin: 0 auto;
    position: relative;

    // Background
    &:after {
        content: ' ';
        width: 10%;
        height: 10%;
        z-index: 50;
        position: absolute;
        top: 45%; // (100% - width(%)) / 2
        left: 45%; // (100% - height(%)) / 2
        border-radius: 50%;
        background-color: ${({ theme }) => theme.colors.primary};
        transition: all 0.25s cubic-bezier(0.55, 0.06, 0.68, 0.19);
    }

    &.shown:after {
        width: 90%;
        height: 90%;
        position: absolute;
        top: 5%; // (100% - height) /2
        left: 5%; // (100% - width) /2
    }

    // Icon
    ${({ $clickable, theme }) => {
        if ($clickable) {
            return (
                `    
                    &:before {
                        content: '';
                        width: 1rem;
                        height: 1rem;

                        position: absolute;
                        right: 0.5rem;
                        bottom: 0.5rem;

                        mask: url(/assets/icons/external.svg) no-repeat 50% 50%;
                        mask-size: cover;
                        background-color: ${theme.colors.primary};
                    }

                    &:hover {
                        cursor: pointer;
                    }
                `
            )
        }
    }}

    @media screen and (${devices.mobileL}) {
        height: max(30vw, 20rem);
        width: max(30vw, 20rem);
    }

    @media screen and (${devices.desktop}) {
        height: min(25vw, 20rem);
        width: min(25vw, 20rem);
    }
`;

type ImageProps = {
    $imgSrc: string;
    $clipped?: boolean;
    $landscape?: boolean;
    alt: string;
}

export const Img = styled(motion.div).attrs<{ alt: string }>(({ alt }) => ({
    className: 'image',
    alt
})) <ImageProps>`
    width: 100%;
    height: 100%;

    position: absolute;
    z-index: 100;

    background-image: ${({ $imgSrc }) => `url(${$imgSrc})`};
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    filter: drop-shadow(4px 4px 4px rgba(26, 13, 6, 0.2));
    ${({ $clipped }) => $clipped && 'clip-path: url(#clipPathLower);'}
    ${({ $landscape }) => {
        if ($landscape) {
            return (`
                aspect-ratio: 16 / 9;
                background-size: contain;
            `)
        }
    }}

    &:after {
        content: '.';
        width: 100%;
        height: 100%;
        visibility: hidden;
    }
`;