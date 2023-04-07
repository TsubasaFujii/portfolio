import { useTheme } from 'styled-components';

import { Label, Marker, Switch, ThemeSwitchWrapper } from './styled';

export default function ThemeSwitch() {
    const { toggleTheme } = useTheme();

    return (
        <ThemeSwitchWrapper onClick={toggleTheme}>
            <Label className='lato' $isLight>
                light
            </Label>
            <Switch>
                <Marker />
            </Switch>
            <Label className='lato'>
                dark
            </Label>
        </ThemeSwitchWrapper >
    )
}