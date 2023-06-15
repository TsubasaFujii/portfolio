import styled from 'styled-components';
import { motion } from 'framer-motion';

export const P = styled.p`
    color: ${({ theme }) => theme.fontColor};
    line-height: 1.5em;
    &:not(:only-of-type) {
        margin-top: 1.3rem;
    }
`
export const TextWrapper = styled(P).attrs((inView) => ({
    animate: {
        opacity: inView ? 1 : 0,
        y: inView ? 0 : '-1rem',
        transition: {
            duration: 0.3
        }
    }
})) <{ inView: boolean }>`
`;

export const NewLine = styled(motion.span)`
    display: block;
`;

export const Large = styled.span.attrs(() => ({
    className: 'large'
}))``;