import { useContext } from 'react';
import PropTypes from 'prop-types';

import ContactForm from './ContactForm';
import { Icon } from '../../components';
import { FooterContent, FooterWrapper, SnsIcon, SocialMedia } from './styled';

import { socialMedia } from '../../data/content';
import { ThemeContext } from '../../components/styles/ContextProviders';
import FooterLinks from './FooterLinks/FooterLinks';

export default function Footer(props) {
    const { contactRef } = props;
    const { currentTheme } = useContext(ThemeContext);

    return (
        <FooterWrapper $currentTheme={currentTheme}>
            <FooterContent>
                <FooterLinks />
                <ContactForm contactRef={contactRef} />
            </FooterContent>
            <SocialMedia>
                {
                    socialMedia.map(({ name, url }) => (
                        <SnsIcon key={name} onClick={() => console.log(url)}>
                            <Icon name={name} />
                        </SnsIcon>
                    ))
                }
            </SocialMedia>
            <div className='copyright'>
                &copy; 2022 Tsubasa Fujii
            </div>
        </FooterWrapper>
    )
}

Footer.propTypes = {
    contactRef: PropTypes.func,
};