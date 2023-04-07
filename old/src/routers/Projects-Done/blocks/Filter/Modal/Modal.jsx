import { AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';

import { Icon } from '../../../../../components';
import { CriteriaInnerWrapper, CriteriaWrapper, GroupedCheckbox } from './styled';
import Checkbox from './Checkbox';

export default function Modal(props) {
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