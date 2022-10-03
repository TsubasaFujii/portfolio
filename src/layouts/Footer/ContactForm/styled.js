import styled from 'styled-components';
import { Heading } from '../../../components';

export const FormHeading = styled(Heading).attrs(() => ({
    as: 'h3',
    id: 'contactForm',
}))`
    text-align: center;
`;

export const Wrapper = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.sm};
`;