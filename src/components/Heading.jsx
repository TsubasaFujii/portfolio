import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.h1.attrs(({ size }) => (
    size ?
        { as: `h${size}` } :
        null
))`
    color: ${({ theme }) => theme.fontColor};
`;

export default function Heading(props) {
    const { size, children } = props;

    return (
        <Wrapper size={size}>
            {children}
        </Wrapper>
    )
}
