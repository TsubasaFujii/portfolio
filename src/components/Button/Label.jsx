import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

// calc((1.5rem + 0.6rem) /2) 1.5rem = icon width & gap
const labelMotion = {
    hidden: {
        x: 'calc((1.5rem + 0.6rem) /2)',
    },
    hover: {
        x: 0,
    },
};

export default function Label(props) {
    const { text } = props;
    return (
        <motion.div
            transition={{
                duration: 0.3,
            }}
            variants={labelMotion}>
            {text}
        </motion.div>
    );
}

Label.propTypes = {
    text: PropTypes.string,
};