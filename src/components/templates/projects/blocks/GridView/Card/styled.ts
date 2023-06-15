import { FlexColumn } from '@/components/common';
import styled from 'styled-components';

export const CardWrapper = styled.article`
    width: 100%;
    height: 100%;

    background: rgba(255, 255, 255, 0.1);
    border-radius: 1rem;
    overflow: hidden;
`;

export const ContentWrapper = styled(FlexColumn)`
    width: 100%;
    margin-top: ${({ theme }) => theme.spacing.sm};
    padding: ${({ theme }) => `0 ${theme.spacing.sm} ${theme.spacing.sm}`};

    align-items: flex-start;
    gap: ${({ theme }) => theme.spacing.sm};
`;

export const Thumbnail = styled.div<{ $img: string; }>`
    width: 100%;
    aspect-ratio: 16/9;
    position: relative;

    background: ${({ $img }) => `center no-repeat url(${$img})`};
    background-size: auto 120%;

    transition: background-size 0.2s ease-in;

    &:before {
        content: '';
        width: 1rem;
        height: 1rem;

        position: absolute;
        right: 0.5rem;
        bottom: 0.5rem;

        mask: url('/assets/icons/external.svg') no-repeat 50% 50%;
        mask-size: cover;
        background-color: ${({ theme }) => theme.colors.primary};
    }

    &:hover {
        cursor: pointer;
        background-size: auto 140%;
    }
    
`;