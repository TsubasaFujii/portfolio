import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { selfIntroduction } from '../../../../../data/content';

const infoMotion = {
    show: {
        opacity: 1,
        transition: {
            duration: 1
        }
    },
    hidden: {
        opacity: 0,
        transition: {
            duration: 0.02
        },
    }
};

export function WordLoop() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        function switchText() {
            setCurrent(prev =>
                prev === selfIntroduction.keywords.length - 1 ? 0 : prev + 1
            );
        }
        const intervalId = setInterval(switchText, 2500);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <AnimatePresence mode='wait'>
            <motion.span
                key={current}
                initial='hidden'
                animate='show'
                exit='hidden'
                variants={infoMotion}
            >
                {selfIntroduction.keywords[current]}
            </motion.span>
        </AnimatePresence>
    )
}