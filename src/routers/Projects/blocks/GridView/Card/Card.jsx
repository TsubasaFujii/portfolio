import PropTypes from 'prop-types';
import { useInView } from 'react-intersection-observer';
import { Button, GroupedIcons, P } from '../../../../../components';

import { openInNewTabTo } from '../../../../../js/window';

import { CardWrapper, ContentWrapper, Thumbnail } from './styled';

export default function Card(props) {
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
                    onClick={() => openInNewTabTo(github)} />
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