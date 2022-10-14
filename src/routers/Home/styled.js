import styled from 'styled-components';
import { devices } from '../../data/viewport';

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.gap};

    @media screen and (${devices.desktop}) {
        gap: ${({ theme }) => theme.spacing.doubleGap};
    }
`;