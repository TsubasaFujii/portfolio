import PropTypes from 'prop-types';
import { LabelWrapper } from './styled';

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
        <LabelWrapper
            transition={{
                duration: 0.3,
            }}
            variants={labelMotion}>
            {text}
        </LabelWrapper>
    );
}

Label.propTypes = {
    text: PropTypes.string,
};