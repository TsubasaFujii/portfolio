import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Main from '../components/layouts/Main';
import Hero from '../components/layouts/index/Hero';
import AboutMe from '../components/layouts/index/AboutMe';
import HighlightedProjects from '../components/layouts/index/HighlightedProjects';

const Container = styled(Main)`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.gap};
`;

export default function Home(props) {
    const { headerHeight } = props;

    return (
        <Container headerHeight={headerHeight}>
            <Hero headerHeight={headerHeight} />
            <AboutMe />
            <HighlightedProjects />
        </Container>
    )
}

Home.propTypes = {
    headerHeight: PropTypes.number,
};
