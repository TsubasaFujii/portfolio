import styled from 'styled-components';
import { devices } from '@/static/viewport';

export const Navigation = styled.nav`
    width: 100%;

    display: flex;
    flex-direction: row;
    gap: 0.6rem;

    @media screen and (${devices.mobileL}) {
        width: fit-content;
    }
`;

export const MenuItem = styled.div`
    padding: ${({ theme }) => `${theme.spacing.sm} 0`};
    position: relative;

    flex: 1;
    text-align: center;

    -webkit-user-select: none; /* Safari */
    -ms-user-select: none; /* IE 10 and IE 11 */
     user-select: none; /* Standard syntax */

    &:after {
        content: '';
        width: 0%;
        margin: auto;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        border-bottom: 0.3rem solid ${({ theme }) => theme.colors.primary};
        transition: all ease-in 0.3s;
    }

    &:hover {
        cursor: pointer;

        &:after {
            width: 100%;
            border-radius: 0.15rem;
            border-bottom-color: ${({ theme }) => theme.colors.primary20};
        }
    }

    &.current:after {
        width: 100%;
        border-radius: 0.15rem;
        border-bottom-color: ${({ theme }) => theme.colors.primary};
    }

    @media screen and (${devices.mobileL}) {
        padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.md}`};
    }
`;