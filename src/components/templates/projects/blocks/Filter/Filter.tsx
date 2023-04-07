import { createPortal } from 'react-dom';

import useControlVisibility from '@/hooks/useControlVisibility';
import Modal from './Modal';
import { Icon, Overlay } from '@/components/common';
import { FilterButton, FilterInnerWrapper, FilterWrapper } from './styled';
import { ChangeEvent } from 'react';
import { FilterBy } from '../../Projects';

type Props = {
    projectTotal: number;
    updateFilterBy: (event: ChangeEvent<HTMLInputElement>) => void;
    isActive: boolean;
    value: FilterBy;
}

export default function Filter(props: Props) {
    const { updateFilterBy, projectTotal, isActive, value } = props;
    const { ref, isVisible: isOpen, updateVisibility } = useControlVisibility();

    const headerEl = document.querySelector('header')!;
    return createPortal(
        <FilterWrapper>
            <FilterInnerWrapper>
                <div>{projectTotal}&nbsp;project(s)</div>
                <FilterButton
                    $isActive={isActive}
                    $isOpen={isOpen}
                    onClick={() => {
                        if (isOpen) return;
                        updateVisibility(true);
                    }}>
                    Filter by
                    <Icon name='funnel' />
                </FilterButton>
                <Modal
                    value={value}
                    isOpen={isOpen}
                    updateFilterBy={updateFilterBy}
                    updateModalState={updateVisibility} />
                {isOpen && <Overlay ref={ref} />}
            </FilterInnerWrapper>
        </FilterWrapper>
        , headerEl
    )
}

