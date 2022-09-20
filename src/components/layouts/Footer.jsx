
import React, { useContext } from 'react'
import styled from 'styled-components';

import { ThemeContext } from '../styles/ContextProviders';
import PropTypes from 'prop-types';

import ContactForm from './footer/ContactForm';
import { Icon } from '../Icon';
import { socialMedia } from '../../data/content';

const FooterWrapper = styled.footer`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.lg};
    align-items: center;
`;

const Flex = styled.div`
    display: flex;
    flex-direction: row;
    gap: ${({ theme }) => theme.spacing.sm};
    justify-content: center;
`;

const SnsIcon = styled.div`
    width: 2rem;
    
    &:hover {
        cursor: pointer;
    }
`;

function Sns() {
    return (
        <Flex>
            {
                socialMedia.map(({ name, url }) => (
                    <SnsIcon key={name} onClick={() => console.log(url)}>
                        <Icon name={name} />
                    </SnsIcon>
                ))
            }
        </Flex>
    )
}

function CopyRight() {
    return (
        <div className='copyright'>
            &copy; 2022 Tsubasa Fujii
        </div>
    )
}

export default function Footer(props) {
    const { contactRef } = props;
    const { currentTheme } = useContext(ThemeContext);

    return (
        <FooterWrapper $currentTheme={currentTheme}>
            <ContactForm contactRef={contactRef} />
            <Sns />
            <CopyRight />
        </FooterWrapper>
    )
}

Footer.propTypes = {
    contactRef: PropTypes.func,
};