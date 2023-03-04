import { devices } from '@/static/viewport';
import styled from 'styled-components';

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

