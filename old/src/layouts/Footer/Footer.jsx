import { socialMedia } from '../../static/content.js';
import { openInNewTabTo } from '../../js/window';

import { Icon } from '../../components';
import { FooterWrapper, SnsIcon, SocialMedia } from './styled';

export default function Footer() {
    return (
        <FooterWrapper>
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