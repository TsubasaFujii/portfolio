import React, { useContext, useState } from 'react'
import { useEffect } from 'react';
import styled from 'styled-components';
import Button from '../Button';
import { Heading } from '../Heading';
import Icon from '../Icon';
import { ThemeContext } from '../styles/ContextProviders';

const FooterHeading = styled(Heading)`
    text-align: center;
    color: ${({ theme, $currentTheme }) => $currentTheme === 'dark' ? theme.colors.black : theme.colors.white};
`;

const FooterWrapper = styled.footer`
    width: 100%;
    min-height: 50vh;
    padding: ${({ theme }) => `${theme.spacing.xl} ${theme.spacing.md}`};

    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.sm};

    color: ${({ theme, $currentTheme }) => $currentTheme === 'dark' ? theme.colors.black : theme.colors.white};
    background: ${({ theme, $currentTheme }) => $currentTheme === 'dark' ? theme.colors.white : theme.colors.black};
`;

const FormWrapper = styled.form`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.sm};
`;

const InputFieldWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.xs};

    & > label {
        text-transform: capitalize;
    }

    & > textarea {
        padding: ${({ theme }) => theme.spacing.sm};
        border-radius: 0.5rem;
    }
`;

const Input = styled.input.attrs(() => ({
    required: true,
}))`
    padding: ${({ theme }) => theme.spacing.sm};
    border-radius: 0.5rem;
    background-color: ${({ theme }) => theme.colors.white};
`;

function InputField(props) {
    const { item, value, handleInput, validateInput } = props;

    return (
        <InputFieldWrapper>
            <label htmlFor={item}>{item}</label>
            <Input
                type={item === 'email' ? 'email' : 'text'}
                id={item}
                name={item}
                placeholder={`Enter ${item}`}
                value={value}
                onChange={handleInput}
                onBlur={validateInput} />
        </InputFieldWrapper>
    )
}

function Form() {
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
    const [isReady, setIsReady] = useState(false);

    function handleInput(event) {
        validateInput(event);
        setInputValues(prev => ({
            ...prev,
            [event.target.id]: event.target.value
        }));
    }

    function handleOnClick() {
        console.log(inputValues);
        setIsReady(false);
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
                handleInput={handleInput} />
            <InputField
                item='email'
                value={inputValues.email}
                handleInput={handleInput} />
            <InputFieldWrapper>
                <label htmlFor='message'>Name</label>
                <textarea
                    id='message'
                    name='message'
                    placeholder='message'
                    rows="5"
                    value={inputValues.message}
                    onChange={handleInput} />
            </InputFieldWrapper>
            <div>
                {Object.values(isError).some(i => i) ? 'Error' : 'Not error'}
            </div>
            <Button
                icon={<Icon name='react' />}
                label='Send Message'
                onClick={handleOnClick}
                disabled={!isReady} />
        </FormWrapper>
    )
}

export default function Footer() {
    const { currentTheme } = useContext(ThemeContext);
    return (
        <FooterWrapper $currentTheme={currentTheme}>
            <FooterHeading size={2}>Contact me</FooterHeading>
            <Form />
        </FooterWrapper>
    )
}
