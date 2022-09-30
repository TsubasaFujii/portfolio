import styled from 'styled-components';
import { devices } from '../../../../hooks/viewport';

export const FormWrapper = styled.form`
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.sm};

    @media screen and (${devices.tablet}) {
        margin: auto;
        width: 30rem;
    }
`;