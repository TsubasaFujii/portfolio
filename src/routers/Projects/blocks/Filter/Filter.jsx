import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';


import { FilterButton, FilterInnerWrapper, FilterWrapper } from './styled';
import Modal from './Modal';
import { Icon, Overlay } from '../../../../components';
import useControlVisibility from '../../../../hooks/useControlVisibility';

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
