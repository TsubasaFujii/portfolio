import { useInView } from 'react-intersection-observer';

import { projectsData } from '@/static/content';

import { Button, Content, H2, SectionRef } from '@/components/common';
import Project from './Project';
import { List } from './styled';
import { useRouter } from 'next/router';
import { scrollToTop } from '@/utils/window';

export default function HighlightedProjects() {
    const { ref, inView } = useInView({
        initialInView: false,
    });
    const router = useRouter();

    async function linkTo(route: string) {
        await router.push(route);
        scrollToTop();
    }

    return (
        <SectionRef ref={ref} id='projects'>
            <Content>
                <H2 isVisible={inView}>
                    projects
                </H2>
                <List>
                    {projectsData
                        .filter(p => p.starred)
                        .map(project => <Project {...project} key={project.title} />)}
                    <Button
                        label='check more projects'
                        icon='chevronRight'
                        alignSelf='center'
                        onClick={() => linkTo('/projects')}
                        secondary />
                </List>
            </Content>
        </SectionRef>
    )
}
