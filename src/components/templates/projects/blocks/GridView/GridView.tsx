import { Section } from '@/components/common';

import Card from './Card';
import { Grid } from './styled';

type Props = {
    projectList: Project[];
}

export default function GridView(props: Props) {
    const { projectList } = props;

    return (
        <Section>
            <Grid>
                {
                    projectList.length > 0 ?
                        projectList.map(project =>
                            <Card
                                key={project.title}
                                {...project} />
                        ) :
                        <div>No match</div>
                }
            </Grid>
        </Section>
    )
}