import { useReducer } from 'react';
import { validateInput } from '../js/form';

const init = {
    name: false,
    email: false,
    message: false,
};

export default function useFormValidation() {
    const [isError, dispatch] = useReducer(validateInput, init);
    return {
        isError,
        dispatch
    }
}