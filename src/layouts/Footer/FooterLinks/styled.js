import styled from 'styled-components';
import { FlexColumn, Heading } from '../../../components';

export const Wrapper = styled(FlexColumn)`
    text-align: center;
`;

export const List = styled.ul`
    margin: 0 auto;
    list-style: disc;
    list-style-position: inside;

    display: inline-block; 
    text-align: left;
`;

export const ListItem = styled.li`
    padding: 0.5em 0.7em;
`;

export const FooterLinksHeading = styled(Heading).attrs(() => ({
    as: 'h3',
}))`
    text-align: center;
`;


