import styled from 'styled-components';
import { Content } from '../../../../components';
import { SectionRef } from '../../../../components';

export const Wrapper = styled(SectionRef)`
    min-height: ${({ $headerHeight }) => `calc(100vh - ${$headerHeight}px)`};
    box-sizing: content-box;
    padding-top:    ${({ $headerHeight }) => `${$headerHeight}px`};
    top: ${({ $headerHeight }) => `-${$headerHeight}px`};
    place-content: normal;
`;

export const ContentWrapper = styled(Content)`
    align-items: flex-start;
`;