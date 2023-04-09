
import { Icon } from '@/components/common';
import { socialMedia } from '@/static/content';
import { openInNewTabTo } from '@/utils/window';
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
                &copy; 2022-2023 Tsubasa Fujii
            </div>
        </FooterWrapper>
    )
}