import styled from 'styled-components';
import { Button } from '../../components';

export const Wrapper = styled.main`
    display: grid;
    place-content: center;
    min-height: 100vh;
`;

export const Row = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    overflow: visible;
    align-items: center;
    justify-content: center;
`;

export const StyledButton = styled(Button)`
    margin-top: ${({theme}) => theme.spacing.md};
`;
