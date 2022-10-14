import styled from 'styled-components';
import { motion } from 'framer-motion';

export const BackgroundWrapper = styled(motion.div)`
    width: 100%;
    height: 100%;

    position: absolute;
    z-index: -1;
    overflow: visible;

    & svg {
        width: 100%;
        height: 100%;
    }
`;