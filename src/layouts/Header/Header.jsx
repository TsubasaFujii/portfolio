import { forwardRef } from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

import { useHideHeaderByScrollDown } from '../../hooks/useHideHeaderByScrollDown';

import { Nav } from './Nav';
import ThemeSwitch from './ThemeSwitch';
import { Content } from './styled';

const variants = {
    hidden: {
        y: '-100%'
    },
    shown: {
        y: 0,
    }
}

export const Header = forwardRef((props, ref) => {
    const { toggleTheme, current, links } = props;
    const { isHidden } = useHideHeaderByScrollDown();

    return (
        <motion.header
            ref={ref}
            animate={isHidden ? 'hidden' : 'shown'}
            variants={variants}>
            <Content>
                <Nav current={current} links={links} />
                <ThemeSwitch toggleTheme={toggleTheme} />
            </Content>
        </motion.header>
    )
});

Header.displayName = 'Header';
Header.propTypes = {
    toggleTheme: PropTypes.func,
    current: PropTypes.number,
    links: PropTypes.array,
};