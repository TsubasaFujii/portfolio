import { useTheme } from 'styled-components';

import { Label, Marker, Switch, ThemeSwitchWrapper } from './styled';

export default function ThemeSwitch() {
    const { currentTheme, toggleTheme } = useTheme();

    return (
        <ThemeSwitchWrapper onClick={toggleTheme}>
            <Label isLight>
                light
            </Label>
            <Switch $currentTheme={currentTheme}>
                <Marker
                    transition={{
                        stiffness: 200,
                        damping: 100
                    }}
                    layout />
            </Switch>
            <Label>
                dark
            </Label>
        </ThemeSwitchWrapper >
    )
}