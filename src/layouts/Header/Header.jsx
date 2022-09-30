import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

import { useHideHeaderByScrollDown } from '../../hooks/component';

import { Content } from './styled';
import { Nav } from './Nav';
import ThemeSwitch from './ThemeSwitch/ThemeSwitch';

export const Header = forwardRef((props, ref) => {
    const { toggleTheme, current, links } = props;
    const { isHidden } = useHideHeaderByScrollDown();

    return (
        <motion.header
            ref={ref}
            animate={{
                y: isHidden ? '-100%' : 0,
                transition: {
                    duration: 0.3
                }
            }}>
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