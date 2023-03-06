import { useTheme } from 'styled-components';

import { Label, Marker, Switch, ThemeSwitchWrapper } from './styled';

export default function ThemeSwitch() {
    const { currentTheme, toggleTheme } = useTheme();

    return (
        <ThemeSwitchWrapper onClick={toggleTheme}>
            <Label $isLight={true} $currentTheme={currentTheme}>
                light
            </Label>
            <Switch $currentTheme={currentTheme}>
                <Marker />
            </Switch>
            <Label $currentTheme={currentTheme}>
                dark
            </Label>
        </ThemeSwitchWrapper >
    )
}