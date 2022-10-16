import { useMemo, useRef, useState } from 'react';
import axios from 'axios';

import useFormValidation from '../../../../../hooks/useFormValidation';

import { P } from '../../../../../components';
import { InputField } from './InputField';
import { FormWrapper, FormButton, Notification } from './styled';

const FORM_FIELDS = ['name', 'email', 'message'];

export default function Form() {
    const [isSending, setIsSending] = useState(false);
    const [isServerError, setIsServerError] = useState(false);
    const { isValid, dispatch: validate } = useFormValidation();
    const [inputValues, setInputValues] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [hasFocused, setHasFocused] = useState({
        name: false,
        email: false,
        message: false,
    });
    const formRef = useRef(null);
    const hasError = useMemo(() => Object.values(isValid).some(value => !value), [isValid]);
    const hasData = useMemo(() => Object.values(inputValues).every(value => value), [inputValues]);
    const notificationMessage = useMemo(() => {
        const emailInvalidEl = document.querySelector('input#email:not(:placeholder-shown):not(:focus):invalid')
        if (hasFocused.name && !isValid.name) {
            return 'Please provide your name'
        } else if (hasFocused.message && !isValid.message) {
            return 'Please provide message'
        } else if (emailInvalidEl) {
            return 'Please enter a valid email address'
        } else if (isServerError) {
            return 'Sorry, something went wrong and couldn\'t send the message.\n Please try again.'
        }
        return;
    }, [isValid, isServerError, hasFocused]);

    function handleInput(event) {
        const { target } = event;
        setInputValues(prev => ({
            ...prev,
            [target.id]: target.value
        }));
        validate({
            type: target.id,
            value: target.value
        });
    }

    function handleOnFocus(event) {
        setHasFocused(prev => ({
            ...prev,
            [event.target.id]: true,
        }))
    }

    function resetStates() {
        setInputValues({
            name: '',
            email: '',
            message: '',
        });
        setHasFocused({
            name: false,
            email: false,
            message: false,
        });
    }

    async function handleOnClick(event) {
        event.preventDefault();
        const message = new FormData(formRef.current);
        setIsSending(true);

        try {
            // eslint-disable-next-line
            await axios.post(process.env.REACT_APP_FORM_API_URL, message);
            if (isServerError) {
                setIsServerError(false);
            }
            setIsSending(false);
            resetStates();
        } catch {
            setIsServerError(true);
        }
    }

    return (
        <FormWrapper ref={formRef}>
            {FORM_FIELDS.map(field => (
                <InputField
                    key={field}
                    item={field}
                    value={inputValues[field]}
                    hasFocused={hasFocused[field]}
                    handleOnFocus={handleOnFocus}
                    handleInput={handleInput}
                    isValid={!isValid[field]} />
            ))}
            <Notification>
                <P>{notificationMessage}</P>
            </Notification>
            <FormButton
                icon='paperPlane'
                label={isSending ? 'Sending...' : 'Send Message'}
                onClick={handleOnClick}
                disabled={hasError || !hasData}
                flat />
        </FormWrapper>
    )
}