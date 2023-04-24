import { ChangeEvent } from 'react';
import { motion } from 'framer-motion';
import { Input, Wrapper, Textarea } from './styled';

type Props = {
    item: string;
    value: string;
    isValid: boolean;
    isFocused: boolean;
    handleOnFocus: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    handleOnChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
};

export default function InputField(props: Props) {
    const { item, value, isFocused, handleOnChange, handleOnFocus } = props;

    return (
        <Wrapper>
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
                        value={value}
                        onChange={handleOnChange}
                        onBlur={handleOnFocus} />
                    :
                    <Input
                        id={item}
                        value={value}
                        onChange={handleOnChange}
                        onBlur={handleOnFocus} />
            }
        </Wrapper >
    )
}