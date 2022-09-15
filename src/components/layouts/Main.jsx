import React, { useContext } from 'react'
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { devices } from '../../hooks/viewport';
import { ThemeContext } from '../styles/ContextProviders';

const Container = styled.main`
    & section:last-child {
        margin-bottom: ${({ theme }) => theme.spacing.gap};
    }
    
    @media screen and (${devices.mobileL}) {
        padding: ${({ theme }) => `0 ${theme.spacing.xl}`};
    }
`;

export default function Main(props) {
    const { children, className } = props;
    const { currentTheme } = useContext(ThemeContext);

    return (
        <Container
            className={className}
            $currentTheme={currentTheme}>
            {children}
        </Container>
    )
}

Main.propTypes = {
    className: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.string,
    ]),
};
