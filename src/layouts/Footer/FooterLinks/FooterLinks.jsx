import { useJumpTo } from '../../../hooks/useJumpTo';
import { links as pageList } from '../../../static/content.js';

import { FooterLinksHeading, List, ListItem, Wrapper } from './styled';

const pages = pageList.filter(({ route }) => route.charAt(0) === '/');

export default function FooterLinks() {
    const { jumpTo } = useJumpTo();

    return (
        <Wrapper>
            <FooterLinksHeading>Pages</FooterLinksHeading>
            <List>
                {
                    pages.map(({ route, name }) => (
                        <ListItem key={name} onClick={() => jumpTo(route)}>
                            {name}
                        </ListItem>
                    ))
                }
            </List>
        </Wrapper>
    )
}