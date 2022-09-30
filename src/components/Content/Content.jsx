import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './styled';

export default function Content(props) {
    const { children, className } = props;
    return (
        <Wrapper className={className}>{children}</Wrapper>
    )
}

Content.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.string,
        PropTypes.element,
    ]),
    className: PropTypes.string,
};