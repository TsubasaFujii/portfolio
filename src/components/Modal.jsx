import React from 'react'
import { createPortal } from 'react-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${({ theme }) => theme.colors.black20};
    overflow-y: hidden;

    &:after {
        content: '.';
        visibility: hidden;
    }
`;

export default function Modal(props) {
    const { isOpen } = props;

    if (isOpen) {
        document.querySelector('main').classList.add('locked');
    } else {
        document.querySelector('main').classList.remove('locked');
    }

    return createPortal((
        <Wrapper $isOpen={isOpen} id='modal' />
    ), document.querySelector('main'));
}
