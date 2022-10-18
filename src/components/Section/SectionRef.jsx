import PropTypes from 'prop-types';
import { forwardRef } from 'react';

import { Wrapper } from './styled';

export const SectionRef = forwardRef((props, ref) => {
    const { children, className, id } = props;
    return (
        <Wrapper
            ref={ref}
            id={id}
            className={className}>
            {children}
        </Wrapper>
    )
})

SectionRef.propTypes = {
    className: PropTypes.string,
    id: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.string,
        PropTypes.object,
    ]),
}
SectionRef.displayName = 'Section';
