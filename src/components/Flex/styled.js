import styled from 'styled-components';
import { devices } from '../../hooks/viewport';

const Flex = styled.div`
    display: flex;
`;

export const RowWrapper = styled(Flex)`
    width: 100%;
    flex-direction: row;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.md};
`;

export const ColumnWrapper = styled(Flex)`
    width: 100%;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.sm};
    justify-content: center;

    @media screen and (${devices.tablet}) {
        gap: ${({ theme }) => theme.spacing.md};
    }
`;