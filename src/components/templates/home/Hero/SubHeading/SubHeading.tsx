import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import { selfIntroduction } from '@/static/content';

const headingMotion = {
    initial: {
        y: '100%'
    },
    visible: {
        y: 0,
        transition: {
            duration: 0.5
        }
    }
};

const wordLoopMotion = {
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

function WordLoop() {
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
                variants={wordLoopMotion}
            >
                {selfIntroduction.keywords[current]}
            </motion.span>
        </AnimatePresence>
    )
}

export default function SubHeading() {
    return (
        <motion.div initial='initial' animate='visible' variants={headingMotion} className='intro'>
            <motion.div variants={headingMotion}>Frontend developer</motion.div>
            <motion.span>
                and <WordLoop />
            </motion.span>
        </motion.div>
    )
}