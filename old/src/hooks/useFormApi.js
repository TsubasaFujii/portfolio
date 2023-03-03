import axios from 'axios';
import { useState } from 'react';

export default function useFormApi(formRef) {
    const [isSending, setIsSending] = useState(false);
    const [isServerError, setIsServerError] = useState(false);

    async function sendMessage(event) {
        event.preventDefault();
        if (isServerError) {
            setIsServerError(false);
        }
        const message = new FormData(formRef.current);
        setIsSending(true);
        
        let response;
        try {
            // eslint-disable-next-line
            response = await axios.post(process.env.REACT_APP_FORM_API_URL, message);
            setIsSending(false);
        } catch {
            setIsSending(false);
            setIsServerError(true);
        }
        return response.status;
    }

    return {
        isSending,
        isServerError,
        sendMessage
    }
}