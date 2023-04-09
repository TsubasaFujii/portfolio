import { motion } from 'framer-motion';

import useShowOnScrollDown from '@/hooks/useShowOnScrollDown';

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

export function Header() {
    const { isShown } = useShowOnScrollDown();

    return (
        <motion.header
            animate={isShown ? 'shown' : 'hidden'}
            variants={variants}>
            <Content>
                <Nav />
                <ThemeSwitch />
            </Content>
        </motion.header>
    )
}