import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Main from '../components/layouts/Main';

import { projectsData } from '../data/content';
import GridView from '../components/layouts/projects/GridView';
import Filter from '../components/layouts/projects/Filter';
import { useMemo } from 'react';

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

    function updateFilterBy(event) {
        const target = event.target;
        setFilterBy(prev => ({
            ...prev,
            [target.id]: !prev[target.id],
        }));
    }

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

    return (
        <Main>
            <Filter
                updateFilterBy={updateFilterBy}
                projectTotal={projectList.length}
                value={filterBy}
                isActive={Object.values(filterBy).filter(v => v).length > 0} />
            <GridView projectList={projectList} />
        </Main>
    )
}

Projects.propTypes = {
    headerHeight: PropTypes.number,
};