import styled from 'styled-components';
import { FlexColumn } from '@/components/common';
import { devices } from '@/static/viewport';

export const ContentWrapper = styled(FlexColumn)`
    @media screen and (${devices.tablet}) {
        padding: ${({ theme }) => `0 ${theme.spacing.md}`};
    }

    @media screen and (${devices.desktopL}) {
        display: grid;
        grid-template-columns: auto 1fr;
        grid-template-rows: repeat(2, auto);
        align-items: center;

        & > div[role="img"] {
            grid-row: 1 / span 2;
            grid-column: 1 / span 1;
        }

        & > div.introduction {
            grid-row: 1 / span 1;
            grid-column: 2 / span 1;
        }

        & :last-child {
            grid-column: 2 / span 1;
            grid-row: 2 / span 1;
        }
    }

    & img {
        width: 70vw;
        @media screen and (${devices.mobileL}) {
            width: max(30vw, 20rem);
        }

        @media screen and (${devices.desktop}) {
            width: min(25vw, 20rem);
        }
    }
`;