import styled from 'styled-components';

export const OverlayWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${({ theme, $currentTheme }) =>
        $currentTheme === 'dark' ? `${theme.colors.white}CC` : theme.colors.black40};

    &:after {
        content: '.';
        visibility: hidden;
    }
`;