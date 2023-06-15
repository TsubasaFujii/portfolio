import { ChangeEvent, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import useControlVisibility from '@/hooks/useControlVisibility';
import { Icon, Overlay } from '@/components/common';
import { FilterBy } from '../../Projects';
import Modal from './Modal';
import { FilterButton, FilterInnerWrapper, FilterWrapper } from './styled';

type Props = {
    projectTotal: number;
    updateFilterBy: (event: ChangeEvent<HTMLInputElement>) => void;
    isActive: boolean;
    value: FilterBy;
}

export default function Filter(props: Props) {
    const { updateFilterBy, projectTotal, isActive, value } = props;
    const [isMounted, setIsMounted] = useState(false);
    const { ref, isVisible: isOpen, updateVisibility } = useControlVisibility();

    useEffect(() => {
        setIsMounted(true)
        return () => setIsMounted(false)
    }, [])

    return isMounted ?
        createPortal(
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
            , document.querySelector('header')!
        ) :
        null
}

