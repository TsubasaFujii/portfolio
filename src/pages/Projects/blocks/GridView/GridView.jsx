import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { Card } from './Card';
import { Grid, Wrapper } from './styled';
import { ThemeContext } from '../../../../components/styles/ContextProviders';

export default function GridView(props) {
    const { projectList } = props;
    const { currentTheme } = useContext(ThemeContext);

    return (
        <Wrapper>
            <Grid>
                {
                    projectList.length > 0 ?
                        projectList.map(project =>
                            <Card
                                key={project.title}
                                {...project}
                                $currentTheme={currentTheme} />
                        ) :
                        <div>No match</div>
                }
            </Grid>
        </Wrapper>
    )
}

GridView.propTypes = {
    projectList: PropTypes.array,
}