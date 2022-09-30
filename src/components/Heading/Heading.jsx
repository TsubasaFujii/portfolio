import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './styled';

export default function Heading(props) {
    const { size, children, transform, className } = props;

    return (
        <Wrapper
            size={size}
            className={className}
            $transform={transform}>
            {children}
        </Wrapper>
    )
}

Heading.propTypes = {
    size: PropTypes.number,
    children: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.string,
    ]),
    transform: PropTypes.string,
    className: PropTypes.string,
};