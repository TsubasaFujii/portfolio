import React from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { devices } from '../../../hooks/viewport';
import { useControlVisibility } from '../../../hooks/component';

import { Icon } from '../../Icon';
import { Overlay } from '../../Overlay';
import { AnimatePresence, motion } from 'framer-motion';
import { FlexRow } from '../../Flex';

const FilterWrapper = styled.aside.attrs(() => ({
    className: 'filters'
}))`
    position: relative;

    // modal: 250
    z-index: 300;

    @media screen and (${devices.desktop}) {
        justify-content: flex-end;
    }
`;

const FilterInnerWrapper = styled(FlexRow)`
    width: 100%;
    padding: ${({ theme }) => `${theme.spacing.md} 0 0`};

    flex-wrap: wrap;
    justify-content: space-between;
    gap: ${({ theme }) => theme.spacing.md};

    @media screen and (${devices.desktopL}) {
        width: ${({ theme }) => theme.max.width};
        margin: auto;
    }
`;

const FilterButton = styled(FlexRow)`
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

const GroupedCheckbox = styled(FlexRow)`
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

const CriteriaWrapper = styled(motion.div).attrs(() => ({
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
        padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.xl}`};
        top: ${({ theme }) => `calc(${theme.spacing.sm} + 100%)`};
        left: ${({ theme }) => `-${theme.spacing.xl}`};
    }
`;

const CriteriaInnerWrapper = styled.div`
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
        width: ${({ theme }) => theme.max.width};
        margin: auto;
    }
`;

function Checkbox(props) {
    const { item, handleOnChange, value } = props;
    return (
        <div>
            <input
                type="checkbox"
                id={item}
                name='filter'
                checked={value}
                onChange={handleOnChange} />
            <label htmlFor={item}>{item}</label>
        </div>
    )
}

Checkbox.propTypes = {
    item: PropTypes.string,
    value: PropTypes.bool,
    handleOnChange: PropTypes.func,
}

function Modal(props) {
    const { updateFilterBy, value, updateModalState, isOpen } = props;

    const criteria = Object.keys(value).map(item =>
        <Checkbox
            key={item}
            item={item}
            value={value[item]}
            handleOnChange={updateFilterBy} />
    );

    return (
        <AnimatePresence>
            {isOpen && (
                <CriteriaWrapper
                    initial={{
                        scaleY: 0,
                        opacity: 0
                    }}
                    animate={{
                        scaleY: 1,
                        opacity: 1,
                        transition: 'ease',
                    }}
                    exit={{
                        scaleY: 0,
                        opacity: 0,
                    }}>
                    <CriteriaInnerWrapper>
                        <div onClick={() => updateModalState(false)}>
                            <Icon name='close' />
                        </div>
                        <GroupedCheckbox>
                            {criteria}
                        </GroupedCheckbox>
                    </CriteriaInnerWrapper>
                </CriteriaWrapper>
            )}
        </AnimatePresence>
    )
}

Modal.propTypes = {
    value: PropTypes.object,
    isOpen: PropTypes.bool,
    updateFilterBy: PropTypes.func,
    updateModalState: PropTypes.func,
}

export default function Filter(props) {
    const { updateFilterBy, projectTotal, isActive, value } = props;
    const { ref, isVisible: isOpen, setIsVisible } = useControlVisibility();

    if (!document.querySelector('header')) return;
    return createPortal(
        <FilterWrapper>
            <FilterInnerWrapper>
                <div>{projectTotal}&nbsp;project(s)</div>
                <FilterButton
                    $isActive={isActive}
                    $isOpen={isOpen}
                    onClick={() => {
                        if (isOpen) return;
                        setIsVisible(true);
                    }}>
                    Filter by
                    <Icon name='funnel' />
                </FilterButton>
                <Modal
                    value={value}
                    isOpen={isOpen}
                    updateFilterBy={updateFilterBy}
                    updateModalState={setIsVisible} />
                {isOpen && <Overlay ref={ref} />}
            </FilterInnerWrapper>
        </FilterWrapper>
        , document.querySelector('header')
    )
}

Filter.propTypes = {
    projectTotal: PropTypes.number,
    updateFilterBy: PropTypes.func,
    isActive: PropTypes.bool,
    value: PropTypes.object,
}
