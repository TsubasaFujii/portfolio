import styled from 'styled-components';

export const Wrapper = styled.div`
    display: grid;
    place-items: center;
    width: 1.5em;
    height: 1.5em;

    & svg {
        width: 100%;
    }
`;

export const GroupedIconWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: ${({ theme }) => theme.spacing.xs};
    color: ${({ theme }) => theme.colors.primary};
    font-size: ${({ $size }) => $size || '1.5rem'};
`;