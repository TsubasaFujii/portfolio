import styled from 'styled-components';
import { devices } from '../../hooks/viewport';

export const Content = styled.div`
    width: 100%;
    margin: auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap-reverse;

    @media screen and (${devices.desktopL}) {
        max-width: ${({ theme }) => theme.max.width};
    }
`;

