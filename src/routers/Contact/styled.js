import styled from 'styled-components';
import { Section } from '../../components';
import { devices } from '../../static/viewport.js';

export const Wrapper = styled(Section)`
    min-height: max-content;
    margin-top: 2rem;

    @media screen and (${devices.tablet}) {
        min-height: 80vh;
    }
`;
