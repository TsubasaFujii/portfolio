import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { devices } from '../hooks/viewport';

const ImageWrapper = styled(motion.div)`
    height: 70vmin;
    width: 70vmin;
    margin: 0 auto;
    position: relative;

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
    background: ${({ $img }) => `center / cover no-repeat url(${$img})`};
    filter: drop-shadow(4px 4px 4px rgba(26, 13, 6, 0.2));
    ${({ $clipped }) => $clipped && 'clip-path: url(#clipPathLower);'}

    &:after {
        content: '.';
        width: 100%;
        height: 100%;
        visibility: hidden;
    }
`;

export default function Image(props) {
    const { img, isVisible, alt, clipped, className } = props;

    return (
        <ImageWrapper className={`${className ? className : ''} ${isVisible ? 'shown' : ''}`}>
            <Img
                $img={img}
                alt={alt}
                animate={{
                    y: isVisible ? 0 : '-2rem',
                    opacity: isVisible ? 1 : 0,
                    transitionDelay: '0.1s',
                    transitionDuration: '0.2s'
                }}
                $clipped={clipped} />
        </ImageWrapper>
    )
}

Image.propTypes = {
    isVisible: PropTypes.bool,
    className: PropTypes.string,
    clipped: PropTypes.bool,
    img: PropTypes.string,
    alt: PropTypes.string,
};