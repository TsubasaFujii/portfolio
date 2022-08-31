import React from 'react';
import styled from 'styled-components';

const path = {
    chevronDown: 'M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5',
    code: 'M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5',
    openExternal: 'M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25',
}

const Wrapper = styled.div`
    display: grid;
    place-items: center;
    width: 1.5em;
    height: 1.5em;
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
