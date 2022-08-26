import React from 'react';
import styled from 'styled-components';

import Button from '../Button';
import Heading from '../Heading';
import Icon from '../Icon';

const Wrapper = styled.div`
    min-height: ${({ headerHeight }) => `calc(100vh - ${headerHeight}px)`};
    padding-left: ${({ theme }) => theme.spacing.md};
    margin-top: ${({ headerHeight }) => `${headerHeight}px`};

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: ${({ theme }) => theme.spacing.md};
`;

const NewLine = styled.span`
    display: block;
`;

export default function Hero(props) {
    const { headerHeight } = props;
    return (
        <Wrapper headerHeight={headerHeight}>
            <Heading>
                Hello,
                <NewLine>I'm </NewLine>
                <NewLine>Tsubasa</NewLine>
            </Heading>
            <Heading size={4}>Frontend developer</Heading>
            <Button
                label='Check my projects'
                icon={<Icon name='chevronDown' />} />
        </Wrapper >
    )
}
