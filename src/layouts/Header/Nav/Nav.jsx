import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import { MenuItem, Navigation } from './styled';
import { scrollToTop } from '../../../js/window';

export default function Nav(props) {
    const { current, links } = props;
    const navigate = useNavigate();

    function handleOnClick(route) {
        if (route.charAt(0) === '#') {
            scrollTo(route);
        } else {
            navigate(route);
            scrollToTop();
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