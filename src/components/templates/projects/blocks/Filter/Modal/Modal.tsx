import { AnimatePresence } from 'framer-motion';

import { CriteriaInnerWrapper, CriteriaWrapper, GroupedCheckbox } from './styled';
import Checkbox from './Checkbox';
import { ChangeEvent } from 'react';
import { Icon } from '@/components/common';
import { FilterBy } from '../../../Projects';

type Props = {
    value: FilterBy,
    isOpen: boolean;
    updateFilterBy: (event: ChangeEvent<HTMLInputElement>) => void;
    updateModalState: (value: boolean) => void;
}

export default function Modal(props: Props) {
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
                <CriteriaWrapper>
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