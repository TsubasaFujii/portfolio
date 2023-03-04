import { useJumpTo } from '@/hooks/useJumpTo';
import { links } from '@/static/content';
import { scrollTo } from '@/utils/window';

import { MenuItem, Navigation } from './styled';

type CustomProps = {
    current: number;
}

export default function Nav(props: CustomProps) {
    const { current } = props;
    const { jumpTo } = useJumpTo();

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
                    className={`navItem${index === current ? ' current' : ''}`}
                    onClick={() => handleOnClick(link.route)}>
                    {link.name}
                </MenuItem>
            )
            }
        </Navigation >
    )
}