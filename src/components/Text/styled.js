import styled from 'styled-components';
import { motion } from 'framer-motion';

export const TextWrapper = styled(motion.p)`
    color: ${({ theme }) => theme.fontColor};
    line-height: 1.5em;
    &:not(:only-of-type) {
        margin-top: 1.3rem;
    }
`;

export const NewLine = styled(motion.span)`
    display: block;
`;