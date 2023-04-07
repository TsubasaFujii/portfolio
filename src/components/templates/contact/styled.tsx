import { Section } from '@/components/common';
import { devices } from '@/static/viewport';
import styled from 'styled-components';

export const Wrapper = styled(Section)`
    min-height: max-content;
    margin-top: 2rem;
    align-items: center;

    @media screen and (${devices.tablet}) {
        min-height: 80vh;
    }
`;
