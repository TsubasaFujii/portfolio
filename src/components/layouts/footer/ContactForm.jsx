import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

import { Button } from '../../Button';
import { Heading } from '../../Heading';
import { devices } from '../../../hooks/viewport';
import { ThemeContext } from '../../styles/ContextProviders';

const FormHeading = styled(Heading).attrs(() => ({
    as: 'h2',
    id: 'contactForm',
}))`
    text-align: center;
    color: ${({ theme, $currentTheme }) =>
        $currentTheme === 'dark' ?
            theme.colors.black :
            theme.colors.white};
`;

const Wrapper = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.sm};
`;

const Form = styled.form`
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.sm};

    @media screen and (${devices.tablet}) {
        margin: auto;
        width: 30rem;
    }
`;

const Input = styled.input.attrs(({ id }) => ({
    required: true,
    name: id,
    placeholder: `${id}*`,
    type: id === 'email' ? 'email' : 'text',
}))`
    border: none;
`;

const Textarea = styled.textarea.attrs(({ id }) => ({
    required: true,
    rows: 5,
    name: id,
    placeholder: `${id}*`,
}))`
    border: none;
`;

const InputFieldWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.xs};

    & > label {
        text-transform: capitalize;
    }

    & > ${Input},
    & > ${Textarea} {
        z-index: 250;
        padding: ${({ theme }) => theme.spacing.sm};
        border-radius: 0.5rem;
        background-color: ${({ theme, $currentTheme }) =>
        $currentTheme === 'dark' ?
            theme.colors.white :
            theme.colors.grey};
    }

    & > ${Input}::placeholder,
    & > ${Textarea}::placeholder {
        text-transform: capitalize;
    }

    & > ${Input}:not(:placeholder-shown):not(:focus):invalid {
        background: #f59456;
    }
`;

function InputField(props) {
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

function Content() {
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
        <Form>
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
                label='Send Message'
                onClick={handleOnClick}
                disabled={!isReady}
                flat />
        </Form>
    )
}

export default function ContactForm(props) {
    const { contactRef } = props;
    const { currentTheme } = useContext(ThemeContext);

    return (
        <Wrapper ref={contactRef}>
            <FormHeading $currentTheme={currentTheme}>
                Contact me
            </FormHeading>
            <Content />
        </Wrapper>
    )
}

ContactForm.propTypes = {
    contactRef: PropTypes.func,
};