import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { FlexColumn } from './Flex';

import { devices } from '../hooks/viewport';

const Wrapper = styled(FlexColumn)`
    justify-content: center;
    gap: ${({ theme }) => theme.spacing.md};

    @media screen and (${devices.tablet}) {
        max-width: ${({ theme }) => theme.max.width};
        margin: 0 auto;
    }
`;

export function Content(props) {
    const { children, className } = props;
    return (
        <Wrapper className={className}>{children}</Wrapper>
    )
}

Content.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.string,
        PropTypes.element,
    ]),
    className: PropTypes.string,
};