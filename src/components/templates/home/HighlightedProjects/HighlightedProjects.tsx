import { useInView } from 'react-intersection-observer';
import { useRouter } from 'next/router';

import { scrollToTop } from '@/utils/window';
import { projectsData } from '@/static/content';

import { Button, Content, H2 } from '@/components/common';
import Project from './Project';
import { List, Wrapper } from './styled';

export default function HighlightedProjects() {
    const { ref, inView } = useInView({
        initialInView: false,
    });
    const router = useRouter();

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
                            router.push('/projects');
                            scrollToTop();
                        }}
                        secondary />
                </List>
            </Content>
        </Wrapper>
    )
}
