import { useJumpTo } from '@/hooks/useJumpTo';
import { links } from '@/static/content';
import { scrollTo, scrollToTop } from '@/utils/window';

import { MenuItem, Navigation } from './styled';
import { useRouter } from 'next/router';

export default function Nav() {
    const router = useRouter();

    function handleOnClick(route: string) {
        scrollToTop();
        router.push(route);
    }

    return (
        <Navigation>
            {
                links.map(({ name, route }, index) =>
                    <MenuItem
                        key={index}
                        className={`navItem${router.pathname === route ? ' current' : ''}`}
                        onClick={() => handleOnClick(route)}>
                        {name}
                    </MenuItem>
                )
            }
        </Navigation >
    )
}