import styled from 'styled-components';
import { devices } from '@/static/viewport';

export const List = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: ${({ theme }) => theme.spacing.gap};

    @media screen and (${devices.tablet}) {
        padding: ${({ theme }) => theme.spacing.md};
    }

    @media screen and (${devices.desktop}) {
        gap: ${({ theme }) => theme.spacing.doubleGap};
    }
`;