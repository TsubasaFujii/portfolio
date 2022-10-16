import { useReducer } from 'react';
import { validateInput } from '../js/form';

const init = {
    name: false,
    email: false,
    message: false,
};

export default function useFormValidation() {
    const [isValid, dispatch] = useReducer(validateInput, init);
    return {
        isValid,
        dispatch
    }
}