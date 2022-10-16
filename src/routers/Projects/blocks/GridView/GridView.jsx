import PropTypes from 'prop-types';

import { Card } from './Card';
import { Section } from '../../../../components';
import { Grid } from './styled';

export default function GridView(props) {
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

GridView.propTypes = {
    projectList: PropTypes.array,
}