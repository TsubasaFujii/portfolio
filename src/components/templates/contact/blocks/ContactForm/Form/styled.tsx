import { Button } from '@/components/common';
import { devices } from '@/static/viewport';
import styled from 'styled-components';

export const FormWrapper = styled.form.attrs(() => ({
    id: 'contact-form',
    method: 'POST',
    action: 'send',
    enctype: 'multipart/form-data'
}))`
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.sm};

    @media screen and (${devices.tablet}) {
        margin: 0 auto;
        width: 30rem;
    }
`;

export const Notification = styled.div`
    width: 100%;
    min-height: 3rem;
    padding: 0.5rem 0;
    
`;

export const FormButton = styled(Button).attrs(() => ({
    type: 'submit',
    value: 'submit'
}))``;