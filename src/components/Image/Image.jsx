import React from 'react';
import PropTypes from 'prop-types';
import { useInView } from 'react-intersection-observer';

import { ImageWrapper, Img } from './styled';

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