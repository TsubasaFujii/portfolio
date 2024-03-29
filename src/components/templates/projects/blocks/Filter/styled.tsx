import { FlexRow } from '@/components/common';
import { devices } from '@/static/viewport';
import styled from 'styled-components';


export const FilterWrapper = styled.aside.attrs(() => ({
    className: 'filters'
}))`
    position: relative;

    // modal: 250
    z-index: 300;

    @media screen and (${devices.desktop}) {
        justify-content: flex-end;
    }
`;

export const FilterInnerWrapper = styled(FlexRow)`
    width: 100%;
    padding: ${({ theme }) => `${theme.spacing.md} 0 0`};

    flex-wrap: wrap;
    justify-content: space-between;
    gap: ${({ theme }) => theme.spacing.md};

    @media screen and (${devices.desktopL}) {
        max-width: ${({ theme }) => theme.max.width};
        margin: auto;
    }
`;

type FilterButton = {
    $isActive: boolean;
    $isOpen: boolean;
}

export const FilterButton = styled(FlexRow) <FilterButton>`
    width: auto;
    margin-left: auto;

    gap: ${({ theme }) => theme.spacing.xs};

    font-family: inherit;
    font-weight: 600;
    
    & div {
        color: ${({ theme, $isActive, $isOpen }) =>
        !$isOpen && $isActive ?
            theme.colors.primary :
            theme.fontColor};
    }

    &:hover {
        cursor: ${({ $isOpen }) => $isOpen ? 'default' : 'pointer'};
    }

    @media screen and (${devices.desktop}) {
        margin-left: 0;
    }
`;