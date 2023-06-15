import styled from 'styled-components';

export const Input = styled.input.attrs(({ id }) => ({
    required: true,
    name: id,
    placeholder: `${id}*`,
    type: id === 'email' ? 'email' : 'text',
}))`
    border: none;
`;

export const Textarea = styled.textarea.attrs(({ id }) => ({
    required: true,
    rows: 5,
    name: id,
    placeholder: `${id}*`,
}))`
    border: none;
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.xs};

    & > label {
        text-transform: capitalize;
    }

    & > ${Input}:not(:placeholder-shown):not(:focus):invalid {
        background: #f59456;
    }

    & > ${Input}::placeholder,
    & > ${Textarea}::placeholder {
        text-transform: capitalize;
    }

    & > ${Input},
    & > ${Textarea} {
        z-index: 250;
        padding: ${({ theme }) => theme.spacing.sm};
        border-radius: 0.5rem;
        background-color: ${({ theme }) =>
        theme.currentTheme === 'dark' ?
            theme.colors.white :
            theme.colors.grey};
    }
`;