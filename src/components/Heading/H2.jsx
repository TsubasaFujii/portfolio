import { useContext } from 'react';
import { ThemeContext } from '../styles/ContextProviders';
import PropTypes from 'prop-types';

import { H2Wrapper } from './styled';

const headingMotion = {
    slideIn: { x: '-1rem', opacity: 0 },
    fallIn: { y: '-1rem', opacity: 0 },
    visible: { x: 0, opacity: 1 },
}

export default function H2(props) {
    const { isVisible, children } = props;
    const { currentTheme } = useContext(ThemeContext);

    return (
        <H2Wrapper
            $currentTheme={currentTheme}
            animate={isVisible ? 'hidden' : 'slideIn'}
            variants={headingMotion}
            transition={{
                ease: 'linear',
                duration: 0.2
            }}
        >
            {children}
        </H2Wrapper>
    )
}

H2.propTypes = {
    isVisible: PropTypes.bool,
    children: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.string,
    ]),
};