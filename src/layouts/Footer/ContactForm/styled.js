import styled from 'styled-components';
import { Heading } from '../../../components';

export const FormHeading = styled(Heading).attrs(() => ({
    as: 'h2',
    id: 'contactForm',
}))`
    text-align: center;
    color: ${({ theme, $currentTheme }) =>
        $currentTheme === 'dark' ?
            theme.colors.black :
            theme.colors.white};
`;

export const Wrapper = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.sm};
`;