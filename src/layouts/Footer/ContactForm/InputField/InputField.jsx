import PropTypes from 'prop-types';
import { useContext } from 'react';
import { motion } from 'framer-motion';

import { ThemeContext } from '../../../../components/styles/ContextProviders';
import { Input, InputFieldWrapper, Textarea } from './styled';

export default function InputField(props) {
    const { item, value, handleInput, isError, isFocused, handleOnFocus } = props;
    const { currentTheme } = useContext(ThemeContext);

    return (
        <InputFieldWrapper>
            <motion.label
                htmlFor={item}
                initial='init'
                animate={{
                    y: isFocused ? 0 : 'calc(100% + 0.5rem)',
                }}>
                {item}*
            </motion.label>
            {
                item === 'message' ?
                    <Textarea
                        id='message'
                        $currentTheme={currentTheme}
                        value={value}
                        onChange={handleInput}
                        onFocus={handleOnFocus} />
                    :
                    <Input
                        id={item}
                        $currentTheme={currentTheme}
                        value={value}
                        onChange={handleInput}
                        invalid={isError}
                        onFocus={handleOnFocus} />
            }
        </InputFieldWrapper >
    )
}

InputField.propTypes = {
    item: PropTypes.string,
    value: PropTypes.string,
    isError: PropTypes.bool,
    isFocused: PropTypes.bool,
    handleOnFocus: PropTypes.func,
    handleInput: PropTypes.func,
};