import { ChangeEvent, RefObject, useMemo } from 'react';

import { InputField } from './InputField';
import { FormWrapper, FormButton, Notification } from './styled';
import useForm, { FormField, FormFields } from '@/hooks/useForm';

import { P } from '@/components/common';

export default function Form() {
    const {
        userInput,
        isFocused,
        isSending,
        isError,
        formRef,
        sendMessage,
        updateUserInput,
        updateIsFocused,
    } = useForm();

    const instructionalText = useMemo(() => {
        if (isFocused.name && !userInput.name.value) {
            return 'Please provide your name'
        } else if (isFocused.message && !userInput.message.value) {
            return 'Please provide message'
        } else if (isFocused.email && !userInput.email.value) {
            return 'Please enter a valid email address'
        } else if (isError) {
            return 'Sorry, something went wrong and couldn\'t send the message.\n Please try again.'
        }
        return;
    }, [userInput, isFocused, isError]);

    function handleOnChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const { value, id } = event.target;
        updateUserInput({
            type: id as FormField,
            value,
        })
    }

    function handleOnFocus(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        updateIsFocused(event.target.id as FormField)
    }

    return (
        <FormWrapper ref={formRef as RefObject<HTMLFormElement>}>
            {FormFields.map(field => (
                <InputField
                    key={field}
                    item={field}
                    value={userInput[field].value}
                    isValid={userInput[field].isValid}
                    isFocused={isFocused[field]}
                    handleOnFocus={handleOnFocus}
                    handleOnChange={handleOnChange}
                />
            ))}
            <Notification>
                <P>{instructionalText}</P>
            </Notification>
            <FormButton
                icon='paperPlane'
                label={isSending ? 'Sending...' : 'Send Message'}
                alignSelf='center'
                onClick={sendMessage}
                disabled={
                    isError ||
                    isSending ||
                    FormFields.some(field => !userInput[field].value)
                }
                flat />
        </FormWrapper>
    )
}