import { motion } from 'framer-motion';
import { WordLoop } from './WordLoop';

const subMotion = {
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

export default function SubHeading() {
    return (
        <motion.div initial='initial' animate='visible' variants={subMotion} className='intro'>
            <motion.div variants={subMotion}>Frontend developer</motion.div>
            <motion.span>
                and <WordLoop />
            </motion.span>
        </motion.div>
    )
}