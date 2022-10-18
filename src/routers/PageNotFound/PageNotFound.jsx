import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useTheme } from 'styled-components';

import { H3, Large } from '../../components';
import { Row, Wrapper, StyledButton } from './styled';

const variants = {
    initial: {
        cx: '50%',
        cy: '30%',
    },
    animate: {
        cx: '50%',
        cy: '45%',
        transition: {
            default: {
                type: 'spring',
                damping: 4,
                stiffness: 100,
                restDelta: 0.1,
            }
        },
    }
}

export default function PageNotFound() {
    const theme = useTheme();
    const navigate = useNavigate();

    function goToTop() {
        navigate('/');
    }

    return (
        <Wrapper>
            <Row>
                <Large>4</Large>
                <svg
                    viewBox='0 0 100 130'
                    xmlns='http://www.w3.org/2000/svg'>
                    <motion.circle
                        fill={theme.colors.primary}
                        initial='initial'
                        animate='animate'
                        variants={variants}
                        r='30' />
                </svg>
                <Large>4</Large>
            </Row>
            <H3>Page Not Found</H3>
            <StyledButton
                icon='chevronRight'
                label='Go to Top page'
                onClick={goToTop} />
        </Wrapper>
    )
}