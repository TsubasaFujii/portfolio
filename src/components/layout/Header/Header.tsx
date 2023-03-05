import { forwardRef, Ref } from 'react';
import { motion } from 'framer-motion';

import { useHideHeaderByScrollDown } from '@/hooks/useHideHeaderByScrollDown';

import Nav from './Nav';
import ThemeSwitch from './ThemeSwitch';
import { Content } from './styled';
import { useTrackViewport } from '@/hooks/useTrackViewport';

const variants = {
    hidden: {
        y: '-100%'
    },
    shown: {
        y: 0,
    }
}

export const Header = forwardRef((_, ref?: Ref<HTMLElement>) => {
    const { isHidden } = useHideHeaderByScrollDown();
    const { currentSection } = useTrackViewport();

    return (
        <motion.header
            ref={ref}
            animate={isHidden ? 'hidden' : 'shown'}
            variants={variants}>
            <Content>
                <Nav current={currentSection} />
                <ThemeSwitch />
            </Content>
        </motion.header>
    )
});

Header.displayName = 'Header';