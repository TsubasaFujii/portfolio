import { links } from '@/static/content';

import { MenuItem, Navigation } from './styled';
import { useRouter } from 'next/router';

import Link from 'next/link';

export default function Nav() {
    const { pathname } = useRouter();

    return (
        <Navigation>
            {
                links.map(({ name, route }, index) =>
                    <MenuItem
                        key={index}
                        className={`navItem${pathname === route ? ' current' : ''}`}
                    >
                        <Link href={route}>{name}</Link>
                    </MenuItem>
                )
            }
        </Navigation >
    )
}