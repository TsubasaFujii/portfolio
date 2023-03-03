import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FlexRow } from '../../../../../components';
import { devices } from '../../../../../static/viewport.js';

export const GroupedCheckbox = styled(FlexRow)`
    padding: ${({ theme }) => `${theme.spacing.sm} 0`};

    flex-wrap: wrap;
    justify-content: space-between;
    gap: ${({ theme }) => theme.spacing.sm};

    color: ${({ theme }) => theme.fontColor};
    z-index: 300;

    @media screen and (${devices.tablet}) {
        justify-content: space-around;
    }

    @media screen and (${devices.desktop}) {
        justify-content: center;
        gap: ${({ theme }) => theme.spacing.lg};
    }

    & > div {
        flex: 0;

        display: flex;
        flex-direction: row;
        align-items: center;
    }

    & input[type='checkbox'] {
        accent-color: ${({ theme }) => theme.colors.white};
        width: 1rem;
        height: 1rem;
    }

    & label {
        padding-left: 0.2rem;
        text-transform: capitalize;
        font-family: inherit;
    }
`;

export const CriteriaWrapper = styled(motion.div).attrs(() => ({
    className: 'modal'
}))`
    // width = (Header vertical padding) * 2 + 100%
    width: 100vw;
    transform-origin: top center;

    position: absolute;
    // (Header bottom padding) * 2 + 100%
    top: ${({ theme }) => `calc(${theme.spacing.xs} + 100%)`};
    // (Header left padding) * -1
    left: ${({ theme }) => `-${theme.spacing.sm}`};
    right: 0;

    @media screen and (${devices.mobileL}) {
        top: ${({ theme }) => `calc(${theme.spacing.sm} + 100%)`};
        left: ${({ theme }) => `-${theme.spacing.xl}`};
    }
`;

export const CriteriaInnerWrapper = styled.div`
    // Vertical padding = Header vertical padding
    padding: ${({ theme }) => `${theme.spacing.sm} 0`};

    display: grid;
    grid-template-rows: repeat(2, auto);

    & > div:first-child {
        grid-row: 1 / span 1;
        margin-left: auto;

        &:hover {
            cursor: pointer;
        }
    }

    & ${GroupedCheckbox} {
        grid-row: 2 / span 1;
    }

    @media screen and (${devices.desktopL}) {
        max-width: ${({ theme }) => theme.max.width};
        margin: auto;
    }
`;