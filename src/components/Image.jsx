import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { devices } from '../hooks/viewport';
import externalIcon from '../assets/icons/external.svg';
import { useInView } from 'react-intersection-observer';

const ImageWrapper = styled(motion.div)`
    height: 70vmin;
    width: 70vmin;
    margin: 0 auto;
    position: relative;

    // Background
    &:after {
        content: ' ';
        width: 10%;
        height: 10%;
        z-index: -1;
        position: absolute;
        // (100% - width(%)) / 2
        top: 45%;
        // (100% - height(%)) / 2
        left: 45%;
        border-radius: 50%;
        opacity: 0;
        background-color: ${({ theme }) => theme.colors.primary};
        transition: all 0.25s cubic-bezier(0.55, 0.06, 0.68, 0.19);
    }

    &.shown:after {
        width: 90%;
        height: 90%;
        opacity: 1;
        position: absolute;
        // 100% - width(%)
        top: 10%;
        // (100% - height(%)) / 2
        left: 5%;
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

                        mask: url(${externalIcon}) no-repeat 50% 50%;
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

const Img = styled(motion.div).attrs(() => ({
    className: 'image'
}))`
    width: 100%;
    height: 100%;
    z-index: 90;
    background-image: ${({ $img }) => `url(${$img})`};
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    filter: drop-shadow(4px 4px 4px rgba(26, 13, 6, 0.2));
    ${({ $clipped }) => $clipped && 'clip-path: url(#clipPathLower);'}
    
    &:after {
        content: '.';
        width: 100%;
        height: 100%;
        visibility: hidden;
    }

    ${({ $landscape }) => {
        if ($landscape) {
            return (`
                aspect-ratio: 16 / 9;
                background-size: contain;
            `)
        }
    }}
`;

export default function Image(props) {
    const { src, alt, clipped, className, clickable, landscape } = props;
    const { ref, inView } = useInView({
        initialInView: false,
        threshold: 0.5,
    });

    return (
        <ImageWrapper
            className={`${className ? className : ''} ${inView ? 'shown' : ''}`}
            $clickable={clickable}
            ref={ref}>
            <Img
                $img={src}
                alt={alt}
                animate={{
                    y: inView ? 0 : '-2rem',
                    opacity: inView ? 1 : 0,
                    transitionDelay: '0.1s',
                    transitionDuration: '0.3s'
                }}
                $clipped={clipped}
                $landscape={landscape} />
        </ImageWrapper>
    )
}

Image.propTypes = {
    isVisible: PropTypes.bool,
    clickable: PropTypes.bool,
    landscape: PropTypes.bool,
    className: PropTypes.string,
    clipped: PropTypes.bool,
    src: PropTypes.string,
    alt: PropTypes.string,
};