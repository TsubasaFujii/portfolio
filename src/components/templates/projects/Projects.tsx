import { useState, useMemo, ChangeEvent } from 'react';

import { projectsData } from '@/static/content';

import GridView from './blocks/GridView';
import Filter from './blocks/Filter';

const TOOLS = projectsData
    .reduce((result, current) => result.concat(current.tools), [] as IconName[])
    .filter((tool, i, arr) => arr.indexOf(tool) === i);

export type FilterBy = {
    [key: string]: boolean
}

const filterByInit = TOOLS.reduce((result: FilterBy, current) => ({
    ...result,
    [current]: false,
}), {} as FilterBy);

export default function Projects() {
    //const [projectList, setProjectList] = useState([]);
    const [filterBy, setFilterBy] = useState<FilterBy>(filterByInit);
    const projectList = useMemo(() => {
        const filters = Object.keys(filterBy).filter(key => filterBy[key]);
        // No filter
        if (filters.length === 0) {
            return projectsData;
        }

        const newList = projectsData.filter(project => (
            filters.every(item => project.tools.includes(item as IconName))
        ));
        return newList;
    }, [filterBy]);

    function updateFilterBy(event: ChangeEvent<HTMLInputElement>) {
        const target = event.target as Element;
        setFilterBy(prev => ({
            ...prev,
            [target.id]: !prev[target.id],
        }));
    }

    return (
        <main>
            <Filter
                updateFilterBy={updateFilterBy}
                projectTotal={projectList.length}
                value={filterBy}
                isActive={Object.values(filterBy).filter(v => v).length > 0} />
            <GridView projectList={projectList} />
        </main>
    )
}