import PropTypes from 'prop-types';

import { openInNewTabTo } from '../../../../../js/window';

import { Button, GroupedIcons, H3, Text } from '../../../../../components';
import { Details, ProjectWrapper, Thumbnail } from './styled';

export default function Project(props) {
    const { title, thumbnail, tools, description, github, production } = props;

    return (
        <ProjectWrapper>
            <Thumbnail src={thumbnail} clickable landscape />
            <a href={production}><H3>{title}</H3></a>
            <Details className='details'>
                <Text>{description}</Text>
                <GroupedIcons names={tools} />
                <Button
                    label='GitHub'
                    icon='code'
                    onClick={() => openInNewTabTo(github)} />
            </Details>
        </ProjectWrapper>
    );
}

Project.propTypes = {
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    tools: PropTypes.array,
    description: PropTypes.string,
    github: PropTypes.string,
    production: PropTypes.string,
};