import React, { useContext } from 'react'
import styled from 'styled-components';
import { Heading } from '../Heading';
import { ThemeContext } from '../styles/ContextProviders';

const FooterHeading = styled(Heading)`
    color: ${({ theme, $currentTheme }) => $currentTheme === 'dark' ? theme.colors.black : theme.colors.white};
`;

const FooterWrapper = styled.footer`
    width: 100%;
    min-height: 50vh;
    padding: ${({ theme }) => `0 ${theme.spacing.md} 0`};

    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.sm};

    color: ${({ theme, $currentTheme }) => $currentTheme === 'dark' ? theme.colors.black : theme.colors.white};
    background: ${({ theme, $currentTheme }) => $currentTheme === 'dark' ? theme.colors.white : theme.colors.black};
`;

const InputFieldWrapper = styled.div`
    display: flex;
    flex-direction: column;

    & > label {
        text-transform: capitalize;
    }

    & > textarea {
        padding: ${({ theme }) => theme.spacing.sm};
        border-radius: 0.5rem;
    }
`;

const Input = styled.input`
    padding: ${({ theme }) => theme.spacing.sm};
    border-radius: 0.5rem;
    background-color: ${({ theme }) => theme.colors.white};
`;

function InputField(props) {
    const { item } = props;
    return (
        <InputFieldWrapper>
            <label htmlFor={item}>{item}</label>
            <Input
                type={item === 'email' ? 'email' : 'text'}
                id={item}
                name={item}
                placeholder={`Enter ${item}`} />
        </InputFieldWrapper>
    )
}

export default function Footer() {
    const { currentTheme } = useContext(ThemeContext);
    return (
        <FooterWrapper $currentTheme={currentTheme}>
            <FooterHeading size={2}>Contact me</FooterHeading>

            <InputField item='name' />
            <InputField item='email' />
            <InputFieldWrapper>
                <label htmlFor='message'>Name</label>
                <textarea id='message' name='message' placeholder='message' rows="5" cols="33" />
            </InputFieldWrapper>
        </FooterWrapper>
    )
}
