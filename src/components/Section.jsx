import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { forwardRef } from 'react';

const Wrapper = styled.section`
    min-height: 100vh;
    position: relative;

    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: ${({ theme }) => theme.spacing.md};
`;

export function Section(props) {
    const { children, className } = props;

    return (
        <Wrapper className={className}>{children}</Wrapper>
    )
}

export const SectionRef = forwardRef((props, ref) => {
    const { children, className } = props;
    return (
        <Wrapper
            ref={ref}
            className={className}>
            {children}
        </Wrapper>
    )
})

Section.propTypes = {
    className: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.string,
        PropTypes.object,
    ]),
}


SectionRef.propTypes = {
    className: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.string,
        PropTypes.object,
    ]),
}
SectionRef.displayName = 'Section';
