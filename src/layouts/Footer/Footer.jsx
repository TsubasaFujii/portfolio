import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import ContactForm from './ContactForm';
import { Icon } from '../../components';
import { Flex, FooterWrapper, SnsIcon } from './styled';

import { socialMedia } from '../../data/content';
import { ThemeContext } from '../../components/styles/ContextProviders';

export default function Footer(props) {
    const { contactRef } = props;
    const { currentTheme } = useContext(ThemeContext);

    return (
        <FooterWrapper $currentTheme={currentTheme}>
            <ContactForm contactRef={contactRef} />
            <Flex>
                {
                    socialMedia.map(({ name, url }) => (
                        <SnsIcon key={name} onClick={() => console.log(url)}>
                            <Icon name={name} />
                        </SnsIcon>
                    ))
                }
            </Flex>
            <div className='copyright'>
                &copy; 2022 Tsubasa Fujii
            </div>
        </FooterWrapper>
    )
}

Footer.propTypes = {
    contactRef: PropTypes.func,
};