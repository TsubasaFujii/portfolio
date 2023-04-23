import { Button, GroupedIcons, P } from '@/components/common';
import { openInNewTabTo } from '@/utils/window';
import { useInView } from 'react-intersection-observer';

import { CardWrapper, ContentWrapper, Thumbnail } from './styled';

type Props = {
    title: string;
    description: string;
    production: string;
    thumbnail: string;
    tools: IconName[];
    github: string;
}
export default function Card(props: Props) {
    const { thumbnail, title, tools, github, description, production } = props;
    const { ref } = useInView({
        initialInView: false,
        threshold: 0.3,
    });

    return (
        <CardWrapper ref={ref}>
            <Thumbnail
                className='thumbnail'
                $img={thumbnail}
                onClick={() => openInNewTabTo(production)} />
            <ContentWrapper>
                <a href={production}><h4>{title}</h4></a>
                <P>{description}</P>
                <GroupedIcons names={tools} size='1rem' />
                <Button
                    label='GitHub'
                    icon='code'
                    alignSelf='center'
                    onClick={() => openInNewTabTo(github)} />
            </ContentWrapper>
        </CardWrapper>
    )
}