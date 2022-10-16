import axios from 'axios';
import { useMemo } from 'react';
import { useEffect, useState } from 'react';
import { Button } from '../../../../../components';
import useFormValidation from '../../../../../hooks/useFormValidation';
import { InputField } from './InputField';
import { FormWrapper } from './styled';

export default function Form() {
    const [buttonLabel, setButtonLabel] = useState('Send Message');
    const { isError, dispatch: validate } = useFormValidation();
    const [inputValues, setInputValues] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [isFocused, setIsFocused] = useState({
        name: false,
        email: false,
        message: false,
    });
    const [isReady, setIsReady] = useState(false);
    const hasError = useMemo(() => Object.values(isError).some(value => value), [isError]);
    const hasData = useMemo(() => Object.values(inputValues).every(value => value), [inputValues]);

    function handleInput(event) {
        const { target } = event;
        validate({
            type: target.id,
            value: target.value
        });
        setInputValues(prev => ({
            ...prev,
            [event.target.id]: event.target.value
        }));
    }

    function handleOnFocus(event) {
        setIsFocused(prev => ({
            ...prev,
            [event.target.id]: true,
        }))
    }

    function resetStates() {
        setIsReady(false);
        setInputValues({
            name: '',
            email: '',
            message: '',
        });
        setIsFocused({
            name: false,
            email: false,
            message: false,
        });
    }

    async function handleOnClick() {
        try {
            await axios.post('https://form-api.onrender.com', inputValues);

            setButtonLabel('Thank you');
            setTimeout(() => setButtonLabel('Send Message'), 1500);
            resetStates();
        } catch {
            console.log('server error');
        }
    }

    useEffect(() => {
        if (!hasError && hasData) {
            setIsReady(true);
        } else {
            setIsReady(false);
        }
    }, [isError, inputValues]);

    return (
        <FormWrapper>
            <InputField
                item='name'
                value={inputValues.name}
                isFocused={isFocused.name}
                handleOnFocus={handleOnFocus}
                handleInput={handleInput}
                isError={isError.name} />
            <InputField
                item='email'
                value={inputValues.email}
                isFocused={isFocused.email}
                handleOnFocus={handleOnFocus}
                handleInput={handleInput}
                isError={isError.email} />
            <InputField
                item='message'
                value={inputValues.message}
                isFocused={isFocused.message}
                handleOnFocus={handleOnFocus}
                handleInput={handleInput}
                isError={isError.message} />
            <Button
                icon='paperPlane'
                label={buttonLabel}
                onClick={handleOnClick}
                disabled={!isReady}
                flat />
        </FormWrapper>
    )
}