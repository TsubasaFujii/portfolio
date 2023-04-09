import { Button, GroupedIcons, H3, Text } from '@/components/common';
import { openInNewTabTo } from '@/utils/window';

import { Details, ProjectWrapper, Thumbnail } from './styled';

type CustomProps = {
    title: string;
    thumbnail: string;
    tools: IconName[],
    description: string;
    github: string;
    production: string;
}

export default function Project(props: CustomProps) {
    const { title, thumbnail, tools, description, github, production } = props;

    return (
        <ProjectWrapper>
            <Thumbnail src={thumbnail} clickable landscape alt='project' />
            <a href={production}><H3>{title}</H3></a>
            <Details>
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