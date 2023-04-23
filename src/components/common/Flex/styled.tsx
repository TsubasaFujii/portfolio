import { devices } from '@/static/viewport';
import styled from 'styled-components';

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

    @media screen and (${devices.tablet}) {
        gap: ${({ theme }) => theme.spacing.md};
    }
`;