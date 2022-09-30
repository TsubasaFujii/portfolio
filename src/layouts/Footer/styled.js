import styled from 'styled-components';

export const FooterWrapper = styled.footer`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.lg};
    align-items: center;
`;

export const Flex = styled.div`
    display: flex;
    flex-direction: row;
    gap: ${({ theme }) => theme.spacing.sm};
    justify-content: center;
`;

export const SnsIcon = styled.div`
    width: 2rem;
    
    &:hover {
        cursor: pointer;
    }
`;