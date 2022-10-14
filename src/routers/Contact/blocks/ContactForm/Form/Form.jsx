import { useEffect, useState } from 'react';
import { Button } from '../../../../../components';
import { InputField } from './InputField';
import { FormWrapper } from './styled';

export default function Form() {
    const [buttonLabel, setButtonLabel] = useState('Send Message');
    const [inputValues, setInputValues] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [isError, setIsError] = useState({
        name: false,
        email: false,
        message: false,
    });
    const [isFocused, setIsFocused] = useState({
        name: false,
        email: false,
        message: false,
    });
    const [isReady, setIsReady] = useState(false);

    function handleInput(event) {
        validateInput(event);
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

    function handleOnClick() {
        console.log(inputValues);
        setButtonLabel('Thank you');
        setTimeout(() => setButtonLabel('Send Message'), 1500);

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

    function validateInput(event) {
        if (event.target.id === 'email') {
            const isValid = /(.+)@(.+){2,}\.(.+){2,}/.test(event.target.value);
            if (!isValid) {
                setIsError(prev => ({
                    ...prev,
                    email: true,
                }));
            } else {
                setIsError(prev => ({
                    ...prev,
                    email: false,
                }))
            }
        } else if (event.target.id === 'name') {
            if (event.target.value === '') {
                setIsError(prev => ({
                    ...prev,
                    name: true
                }));
            } else {
                setIsError(prev => ({
                    ...prev,
                    name: false,
                }))
            }
        }
    }

    useEffect(() => {
        const hasError = Object.values(isError).some(value => value);
        const hasData = Object.values(inputValues).every(value => value);

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