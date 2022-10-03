import { FooterLinksHeading, List, ListItem, Wrapper } from './styled';
import { Link } from 'react-router-dom';

import { links as pageList } from '../../../data/content';

const pages = pageList.filter(({ route }) => route.charAt(0) === '/');

export default function FooterLinks() {
    return (
        <Wrapper>
            <FooterLinksHeading>Pages</FooterLinksHeading>
            <List>
                {
                    pages.map(({ route, name }) => (
                        <ListItem key={name}>
                            <Link to={route}>{name}</Link>
                        </ListItem>
                    ))
                }
            </List>
        </Wrapper>
    )
}