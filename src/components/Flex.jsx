import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { devices } from '../hooks/viewport';

const Flex = styled.div`
    display: flex;
`;

const RowWrapper = styled(Flex)`
    width: 100%;
    flex-direction: row;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.md};
`;

const ColumnWrapper = styled(Flex)`
    width: 100%;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.sm};
    justify-content: center;

    @media screen and (${devices.tablet}) {
        gap: ${({ theme }) => theme.spacing.md};
    }
`;

export function FlexRow(props) {
    const { children, className, onClick } = props;
    return (
        <RowWrapper className={className} onClick={onClick}>{children}</RowWrapper>
    )
}

FlexRow.propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func,
    children: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.string,
        PropTypes.object,
    ]),
}

export function FlexColumn(props) {
    const { children, className } = props;
    return (
        <ColumnWrapper className={className}>{children}</ColumnWrapper>
    )
}

FlexColumn.propTypes = {
    className: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.string,
        PropTypes.object,
    ]),
}