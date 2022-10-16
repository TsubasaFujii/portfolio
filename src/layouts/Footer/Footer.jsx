import ContactForm from './ContactForm';
import { Icon } from '../../components';

import { socialMedia } from '../../static/content.js';
import { openInNewTabTo } from '../../js/window';

import FooterLinks from './FooterLinks/FooterLinks';
import { FooterContent, FooterWrapper, SnsIcon, SocialMedia } from './styled';

export default function Footer() {
    return (
        <FooterWrapper>
            <FooterContent>
                <FooterLinks />
                <ContactForm />
            </FooterContent>
            <SocialMedia>
                {
                    socialMedia.map(({ name, url }) => (
                        <SnsIcon key={name} onClick={() => openInNewTabTo(url)}>
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