import { Content } from '@/components/common';
import { devices } from '@/static/viewport';
import styled from 'styled-components';

export const Grid = styled(Content)`
    min-height: 50vh;
    max-width: 100%;
    margin-top: ${({ theme }) => theme.spacing.md};

    display: grid;
    //grid-template-columns:  max-content;
    grid-template-rows: max-content;
    gap: ${({ theme }) => `${theme.spacing.gap} ${theme.spacing.md}`};

    @media screen and (${devices.tablet}) {
        grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
    }
    
    @media screen and (${devices.desktop}) {
        gap: ${({ theme }) => `${theme.spacing.gap} ${theme.spacing.lg}`};
    }

    @media screen and (${devices.desktopL}) {
        max-width: ${({ theme }) => theme.max.width};
    }
`;