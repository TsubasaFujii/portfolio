import { ComponentPropsWithRef, forwardRef, Ref } from 'react';
import { motion } from 'framer-motion';

import { useHideHeaderByScrollDown } from '@/hooks/useHideHeaderByScrollDown';

import Nav from './Nav';
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

interface CustomProps {
    current: number;
}

export const Header = forwardRef((props: CustomProps & ComponentPropsWithRef<'section'>, ref?: Ref<HTMLElement>) => {
    const { current } = props;
    const { isHidden } = useHideHeaderByScrollDown();

    return (
        <motion.header
            ref={ref}
            animate={isHidden ? 'hidden' : 'shown'}
            variants={variants}>
            <Content>
                <Nav current={current} />
                <ThemeSwitch />
            </Content>
        </motion.header>
    )
});

Header.displayName = 'Header';