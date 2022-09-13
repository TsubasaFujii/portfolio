import React from 'react';
import PropTypes from 'prop-types';

import Hero from '../components/layouts/index/Hero';
import AboutMe from '../components/layouts/index/AboutMe';
import HighlightedProjects from '../components/layouts/index/HighlightedProjects';

export default function Home(props) {
    const { headerHeight } = props;

    return (
        <>
            <Hero headerHeight={headerHeight} />
            <AboutMe />
            <HighlightedProjects />
        </>
    )
}

Home.propTypes = {
    headerHeight: PropTypes.number,
};
