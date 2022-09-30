import styled from 'styled-components';
import { devices } from '../../hooks/viewport';
import { FlexColumn } from '../Flex';

export const Wrapper = styled(FlexColumn)`
    justify-content: center;
    gap: ${({ theme }) => theme.spacing.md};

    @media screen and (${devices.tablet}) {
        max-width: ${({ theme }) => theme.max.width};
        margin: 0 auto;
    }
`;