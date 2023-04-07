import { useJumpTo } from '@/hooks/useJumpTo';
import { links } from '@/static/content';
import { scrollTo } from '@/utils/window';

import { MenuItem, Navigation } from './styled';

export default function Nav() {
    const { jumpTo, currentPath } = useJumpTo();

    function handleOnClick(route: string) {
        if (route.charAt(0) === '#') {
            scrollTo(route);
        } else {
            jumpTo(route);
        }
        return;
    }

    return (
        <Navigation>
            {links.map((link, index) =>
                <MenuItem
                    key={index}
                    className={`navItem${currentPath === link.route ? ' current' : ''}`}
                    onClick={() => handleOnClick(link.route)}>
                    {link.name}
                </MenuItem>
            )
            }
        </Navigation >
    )
}