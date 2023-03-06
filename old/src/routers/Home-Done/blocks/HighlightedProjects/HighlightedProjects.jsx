import { useNavigate } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';

import { projectsData } from '../../../../static/content.js';
import { scrollToTop } from '../../../../js/window';

import Project from './Project';
import { Button, Content, H2 } from '../../../../components';
import { List, Wrapper } from './styled';

export default function HighlightedProjects() {
    const { ref, inView } = useInView({
        initialInView: false,
    });
    const navigate = useNavigate();

    return (
        <Wrapper ref={ref}>
            <Content>
                <H2 isVisible={inView}>projects</H2>
                <List>
                    {projectsData
                        .filter(p => p.starred)
                        .map(project => <Project {...project} key={project.title} />)}
                    <Button
                        label='check more projects'
                        icon='chevronRight'
                        onClick={() => {
                            navigate('/projects');
                            scrollToTop();
                        }}
                        secondary />
                </List>
            </Content>
        </Wrapper>
    )
}