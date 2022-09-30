import styled from 'styled-components';
import externalIcon from '../../../../../assets/icons/external.svg';
import { FlexColumn } from '../../../../../components';

export const CardWrapper = styled.article`
    width: 100%;
    height: 100%;

    background: ${({ $currentTheme }) =>
        $currentTheme === 'dark' ?
            'rgba(255, 255, 255, 0.1)' :
            'rgba(255, 255, 255, 0.4)'};
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

export const Thumbnail = styled.div`
    width: 100%;
    aspect-ratio: 16/9;
    position: relative;

    background: ${({ $img }) => `center no-repeat url(${$img})`};
    background-size: auto 100%;

    transition: background-size 0.2s ease-in;

    &:before {
        content: '';
        width: 1rem;
        height: 1rem;

        position: absolute;
        right: 0.5rem;
        bottom: 0.5rem;

        mask: url(${externalIcon}) no-repeat 50% 50%;
        mask-size: cover;
        background-color: ${({ theme }) => theme.colors.primary};
    }

    &:hover {
        cursor: pointer;
        background-size: auto 120%;
    }
    
`;