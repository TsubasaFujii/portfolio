import styled from 'styled-components';
import { Content } from '../../../../components';

import { devices } from '../../../../static/viewport.js';

export const Grid = styled(Content)`
    min-height: 50vh;
    margin-top: ${({ theme }) => theme.spacing.md};

    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: max-content;
    gap: ${({ theme }) => `${theme.spacing.gap} ${theme.spacing.md}`};

    @media screen and (${devices.tablet}) {
        grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
    }
    @media screen and (${devices.desktop}) {
        gap: ${({ theme }) => `${theme.spacing.gap} ${theme.spacing.lg}`};
    }
`;