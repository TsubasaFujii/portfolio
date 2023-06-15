import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Content, SectionRef } from '@/components/common';

export const Wrapper = styled(SectionRef) <{ $headerHeight: number | null; }>`
    min-height: ${({ $headerHeight }) => `calc(100vh - ${$headerHeight}px)`};
    box-sizing: content-box;
    padding-top:    ${({ $headerHeight }) => `${$headerHeight}px`};
    top: ${({ $headerHeight }) => `-${$headerHeight}px`};
    place-content: normal;
`;

export const ContentWrapper = styled(Content)`
    align-items: flex-start;
`;

export const BackgroundWrapper = styled.div`
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

export const MotionCircle = styled(motion.circle)`
    fill: ${({ theme }) => theme.colors.primary};
`;