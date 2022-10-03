import styled from 'styled-components';
import { FlexRow } from '../../components';
import { devices } from '../../hooks/viewport';

export const FooterWrapper = styled.footer`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.lg};
    align-items: center;
`;

export const FooterContent = styled(FlexRow)`
    gap: ${({ theme }) => theme.spacing.lg};
    flex-wrap: wrap-reverse;
    align-items: flex-start;

    @media screen and (${devices.tablet}) {
        flex-wrap: nowrap;
    }
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