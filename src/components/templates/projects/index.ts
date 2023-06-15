/* import { lazy, Suspense } from 'react';
import Spinner from '../../components/Spinner';

const ProjectsPage = lazy(() => import('./Projects'));

function Projects() {
    return (
        <Suspense fallback={<Spinner />}>
            <ProjectsPage />
        </Suspense>
    );
}

export default Projects; */

import Projects from './Projects';
export default Projects;