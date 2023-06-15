import { ApiStatus } from '@/types/apiStatus';
import axios from 'axios';
import { SyntheticEvent, useReducer, useRef, useState } from 'react';

export const FormFields = ['name', 'email', 'message'] as const;

export type FormField = typeof FormFields[number];

export type FormData = {
    [key in FormField]: {
        isValid: boolean;
        value: string;
    };
}
type FocusedField = {
    [key in FormField]: boolean;
}

const initInput = {
    name: {
        isValid: false,
        value: '',
    },
    email: {
        isValid: false,
        value: '',
    },
    message: {
        isValid: false,
        value: '',
    },
}

const initFocus = {
    name: false,
    email: false,
    message: false,
}

function handleInput(state: FormData, action: { type: FormField | 'reset', value?: string }) {
    const { value, type } = action;

    // Do not use "!value" for the condition. The value can be empty array
    if (type === 'email' && value !== undefined) {
        return {
            ...state,
            [type]: {
                value: value,
                isValid: /(.+)@(.+){2,}\.(.+){2,}/.test(value),
            },
        }
    } else if ((type === 'name' || type === 'message') && value !== undefined) {
        return {
            ...state,
            [type]: {
                value: value,
                isValid: value !== '',
            },
        }
    } else if (type === 'reset') {
        return initInput
    }

    return state;
}

export default function useForm() {
    const [userInput, updateUserInput] = useReducer(handleInput, initInput);
    // Once value becomes true, it doesn't go back to false
    const [isFocused, setIsFocused] = useState<FocusedField>(initFocus);
    const [isSending, setIsSending] = useState(false);
    const [isError, setIsError] = useState(false);
    const formRef = useRef<HTMLFormElement>();

    function updateIsFocused(fieldName: keyof FocusedField) {
        setIsFocused(prev => ({
            ...prev,
            [fieldName]: true,
        }))
    }

    async function sendMessage(event: SyntheticEvent) {
        event.preventDefault();
        if (isError) {
            setIsError(false);
        }

        if (!process.env.REACT_APP_FORM_API_URL) {
            setIsError(true);
            return;
        }

        try {
            setIsSending(true);
            const message = new FormData(formRef.current);
            const { status } = await axios.post(process.env.REACT_APP_FORM_API_URL, message);
            if (status === ApiStatus.Created || status === ApiStatus.Success) {
                resetFormData()
            }
        } catch {
            setIsError(true);
        } finally {
            setIsSending(false);
        }
    }

    function resetFormData() {
        updateUserInput({
            type: 'reset'
        });
        setIsFocused(initFocus);
    }

    return {
        userInput,
        isFocused,
        isSending,
        isError,
        formRef,
        sendMessage,
        updateUserInput,
        updateIsFocused,
    }
}