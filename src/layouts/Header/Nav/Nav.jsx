import PropTypes from 'prop-types';

import { useJumpTo } from '../../../hooks/useJumpTo';

import { MenuItem, Navigation } from './styled';
import { scrollTo } from '../../../js/window';

export default function Nav(props) {
    const { current, links } = props;
    const { jumpTo } = useJumpTo();

    function handleOnClick(route) {
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
                    className={index === current ? 'current' : null}
                    onClick={() => handleOnClick(link.route)}>
                    {link.name}
                </MenuItem>
            )}
        </Navigation>
    )
}

Nav.propTypes = {
    current: PropTypes.number,
    links: PropTypes.array,
};