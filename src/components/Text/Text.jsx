import React from 'react';
import PropTypes from 'prop-types';
import { useInView } from 'react-intersection-observer';
import { TextWrapper } from './styled';

export default function Text(props) {
    const { children } = props;
    const { ref, inView } = useInView({
        initialInView: false,
        threshold: 0.3,
    });

    return (
        <TextWrapper
            ref={ref}
            animate={{
                opacity: inView ? 1 : 0,
                y: inView ? 0 : '-1rem',
                transition: {
                    duration: 0.3
                }
            }}>
            {children}
        </TextWrapper>
    )
}

Text.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.string,
    ]),
};