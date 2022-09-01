import React from 'react'
import styled from 'styled-components';

const TextWrapper = styled.p`
    color: ${({ theme }) => theme.fontColor};
    line-height: 1.5em;
    &:not(:only-of-type) {
        margin-top: 1.3rem;
    }
`;

export default function Text(props) {
    const { children } = props;
    return (
        <TextWrapper>
            {children}
        </TextWrapper>
    )
}
