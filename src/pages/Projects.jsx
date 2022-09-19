import React, { useState, useEffect, useMemo } from 'react';

import GridView from '../components/layouts/projects/GridView';
import Filter from '../components/layouts/projects/Filter';

import { projectsData } from '../data/content';

export default function Projects() {
    const [projectList, setProjectList] = useState([]);
    const tools = useMemo(() => (
        projectsData
            .reduce((result, current) => result.concat(current.tools), [])
            .filter((tool, i, arr) => arr.indexOf(tool) === i)), [projectsData]);
    const [filterBy, setFilterBy] = useState(tools.reduce((result, current) => {
        result[current] = false;
        return result;
    }, {}));

    useEffect(() => {
        if (Object.keys(filterBy).filter(k => filterBy[k]).length === 0) {
            setProjectList(projectsData);
        } else {
            const filterCondition = Object.keys(filterBy).filter(k => filterBy[k]);
            const newList = projectsData.filter(project => (
                filterCondition.every(condition => project.tools.includes(condition))
            ));
            setProjectList(newList);
        }
    }, [filterBy]);

    function updateFilterBy(event) {
        const target = event.target;
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