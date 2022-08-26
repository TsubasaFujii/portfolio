import React from 'react';
import styled from 'styled-components';

const path = {
    chevronDown: 'M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5',
}


const Wrapper = styled.div`
    width: 1rem;
    height: 1rem;
    margin: auto;
`
export default function Icon(props) {
    const { name } = props;

    return (
        <Wrapper>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d={path[name]} />
            </svg>
        </Wrapper>
    )
}



