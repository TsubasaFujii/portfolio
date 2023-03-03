import { useTheme } from 'styled-components';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

import { BackgroundWrapper } from './styled';

export default function BackgroundLayer(props) {
    const { headerHeight, isVisible } = props;
    const theme = useTheme();

    return (
        <BackgroundWrapper $headerHeight={headerHeight}>
            <svg
                viewBox='0 0 100 100'
                xmlns='http://www.w3.org/2000/svg'>
                <motion.circle
                    fill={theme.colors.primary}
                    initial={{
                        cx: 0,
                        cy: 0,
                        scale: 0.5,
                    }}
                    animate={{
                        cx: isVisible ? '80%' : 0,
                        cy: isVisible ? '55%' : 0,
                        scale: 1,
                        transition: {
                            default: {
                                type: 'spring',
                                damping: 4,
                                stiffness: 100,
                                restDelta: 0.1,
                            },
                            scale: {
                                duration: 0.5,
                            }
                        },
                    }}
                    cx='50%'
                    cy='50%'
                    r='40%' />
            </svg>
        </BackgroundWrapper>

    );
}

BackgroundLayer.propTypes = {
    isVisible: PropTypes.bool,
    headerHeight: PropTypes.number,
};