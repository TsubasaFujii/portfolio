import React from 'react';
import styled from 'styled-components';

import Button from '../Button';
import { Heading } from '../Heading';

import project1 from '../../assets/projects/webShop.JPG';
import Icon from '../Icon';

const Wrapper = styled.section`
    position: relative;
`;

const ProjectWrapper = styled.div`
    width: 100%;
    min-height: 100vh;

    display: flex;
    flex-direction: column;
    flex: 1;
    gap: ${({ theme }) => theme.spacing.sm};
    justify-content: center;
    
`;
const GroupedButtons = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: ${({ theme }) => theme.spacing.sm};
`;

const Details = styled.div`
    margin-left: 3rem;
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.md};
    flex-wrap: wrap;
    justify-content: center;
`

const Description = styled.p`

`;

const ProjectThumbnail = styled.div`
    width: 100%;
    aspect-ratio: 16 / 9;
    background: center url(project1);

    :before {
        content: '.';
        visibility: hidden;
    }
`;

function Project() {
    return (
        <ProjectWrapper>
            <ProjectThumbnail alt='project thumbnail' />
            <Heading size={3}>e-commance website</Heading>
            <Details>
                <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna.</Description>
                <GroupedButtons>
                    <Button label='GitHub' icon={<Icon name='code' />} />
                    <Button label='Open app' icon={<Icon name='openExternal' />} />
                </GroupedButtons>
            </Details>
        </ProjectWrapper>
    );
}

export default function Projects() {
    return (
        <Wrapper>
            <Project />
        </Wrapper>
    )
}
