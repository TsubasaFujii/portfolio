import { useState, useEffect } from 'react';

import { projectsData } from '../../static/content.js';

import { GridView } from './blocks/GridView';
import Filter from './blocks/Filter';


const TOOLS = projectsData
    .reduce((result, current) => result.concat(current.tools), [])
    .filter((tool, i, arr) => arr.indexOf(tool) === i);

export default function Projects() {
    const [projectList, setProjectList] = useState([]);
    const [filterBy, setFilterBy] = useState(TOOLS.reduce((result, current) => {
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