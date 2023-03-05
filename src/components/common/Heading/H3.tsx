import { useInView } from 'react-intersection-observer';
import PropTypes from 'prop-types';

import { AnimatedUnderline, H3Wrapper } from './styled';

const headingMotion = {
    slideIn: { x: '-1rem', opacity: 0 },
    fallIn: { y: '-1rem', opacity: 0 },
    visible: { x: 0, opacity: 1 },
}

export default function H3(props) {
    const { children } = props;
    const { ref, inView } = useInView({
        initialInView: false,
        rootMargin: '0% 0% 5% 0%',
        threshold: 1,
    });

    return (
        <H3Wrapper
            animate={inView ? 'hidden' : 'fallIn'}
            variants={headingMotion}
            ref={ref}>
            <AnimatedUnderline className={inView ? 'shown' : null}>
                {children}
            </AnimatedUnderline>
        </H3Wrapper>
    )
}

H3.propTypes = {
    isVisible: PropTypes.bool,
    children: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.string,
    ]),
};