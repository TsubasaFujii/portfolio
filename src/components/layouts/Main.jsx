import React from 'react'
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { devices } from '../../hooks/viewport';

const Container = styled.main`
    margin-top: ${({ $headerHeight }) => `${$headerHeight}px`};
    padding: ${({ theme }) => `0 ${theme.spacing.md}`};
    position: relative;
    z-index: 200;

    & section:last-child {
        margin-bottom: ${({ theme }) => theme.spacing.gap};
    }
    
    @media screen and (${devices.mobileL}) {
        padding: ${({ theme }) => `0 ${theme.spacing.xl}`};
    }
`;

export default function Main(props) {
    const { children, headerHeight, className } = props;
    return (
        <Container $headerHeight={headerHeight} className={className}>
            {children}
        </Container>
    )
}

Main.propTypes = {
    headerHeight: PropTypes.number,
    className: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.string,
    ]),
};
