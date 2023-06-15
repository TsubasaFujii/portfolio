import styled from 'styled-components';
import { FlexRow } from '@/components/common';

export const FooterWrapper = styled.footer`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.sm};
    align-items: center;
`;

export const SocialMedia = styled(FlexRow)`
    gap: ${({ theme }) => theme.spacing.sm};
    justify-content: center;
`;

export const SnsIcon = styled.div`
    width: 2rem;
    
    &:hover {
        cursor: pointer;
    }
`;