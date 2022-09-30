import PropTypes from 'prop-types';
import { useInView } from 'react-intersection-observer';
import { Button, GroupedIcons, Text } from '../../../../../components';

import { CardWrapper, ContentWrapper, Thumbnail } from './styled';

export default function Card(props) {
    const { thumbnail, title, tools, github, description, production } = props;
    const { ref } = useInView({
        initialInView: false,
        threshold: 0.3,
    });

    function openExternalLink(url) {
        console.log('Open', url);
    }

    return (
        <CardWrapper ref={ref}>
            <Thumbnail
                className='thumbnail'
                $img={thumbnail}
                onClick={() => openExternalLink(production)} />
            <ContentWrapper>
                <a href={production}><h4>{title}</h4></a>
                <Text>{description}</Text>
                <GroupedIcons names={tools} size='1rem' />
                <Button
                    label='GitHub'
                    icon='code'
                    onClick={() => openExternalLink(github)} />
            </ContentWrapper>
        </CardWrapper>
    )
}

Card.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    production: PropTypes.string,
    thumbnail: PropTypes.string,
    tools: PropTypes.array,
    github: PropTypes.string,
    url: PropTypes.string,
};