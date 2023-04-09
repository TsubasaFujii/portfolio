import { links } from '@/static/content';

import { MenuItem, Navigation } from './styled';
import { useRouter } from 'next/router';
import { useLinkTo } from '@/hooks/useLinkTo';

export default function Nav() {
    const { pathname } = useRouter();
    const { linkTo } = useLinkTo();

    return (
        <Navigation>
            {
                links.map(({ name, route }, index) =>
                    <MenuItem
                        key={index}
                        className={`navItem${pathname === route ? ' current' : ''}`}
                        onClick={() => linkTo(route)}>
                        {name}
                    </MenuItem>
                )
            }
        </Navigation >
    )
}