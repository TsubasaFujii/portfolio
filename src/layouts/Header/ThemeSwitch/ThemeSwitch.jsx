import { useContext } from 'react';
import { useTheme } from 'styled-components';

import { ThemeContext } from '../../../context/ThemeContext';

import { Label, Marker, Switch, ThemeSwitchWrapper } from './styled';

export default function ThemeSwitch() {
    const { currentTheme, toggleTheme } = useContext(ThemeContext);
    const theme = useTheme();

    return (
        <ThemeSwitchWrapper onClick={toggleTheme}>
            <Label
                animate={{
                    color: currentTheme === 'light' ?
                        theme.colors.black : `${theme.colors.white}66`
                }}>
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
            <Label
                animate={{
                    color: currentTheme === 'light' ?
                        `${theme.colors.black}66` : theme.colors.white
                }}>
                dark
            </Label>
        </ThemeSwitchWrapper >
    )
}