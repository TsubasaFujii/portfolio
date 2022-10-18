import PropTypes from 'prop-types';
import { useInView } from 'react-intersection-observer';

import { ImageWrapper, Img } from './styled';

const variants = {
    shown: {
        opacity: 1,
        transition: {
            delay: 0.1,
            duration: 0.3
        }
    },
    hidden: {
        opacity: 0,
    }
}

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
                animate={inView ? 'shown' : 'hidden'}
                variants={variants}
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