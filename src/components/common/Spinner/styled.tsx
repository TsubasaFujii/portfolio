import styled, { keyframes } from 'styled-components';
import { Section } from '../Section';

export const Wrapper = styled(Section)`
    place-content: center;
`;

const bounce = keyframes`
    0% {
        transform: scale(0%);
    }

    40% {
        transform: scale(100%);
    }

    100% {
        transform: scale(20%);
    }
`;

export const Circle = styled.circle`
    animation: ${bounce} 2s ease-in infinite;
    transform-origin: center;
`;