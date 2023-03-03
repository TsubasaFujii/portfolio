import styled from 'styled-components';
import { FlexColumn, SectionRef } from '../../../../components';
import { devices } from '../../../../static/viewport.js';

export const Wrapper = styled(SectionRef).attrs(() => ({
    id: 'projects'
}))`
    scroll-margin: 10vh;
`;

export const List = styled(FlexColumn)`
    gap: ${({ theme }) => theme.spacing.gap};

    @media screen and (${devices.tablet}) {
        padding: ${({ theme }) => theme.spacing.md};
    }

    @media screen and (${devices.desktop}) {
        gap: ${({ theme }) => theme.spacing.doubleGap};
    }
`;