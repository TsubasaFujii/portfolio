import { HTMLProps, ReactNode } from 'react';
import { useTheme } from 'styled-components';

import Label from './Label';
import ButtonIcon from './ButtonIcon';
import { Icon } from '../Icon';
import { ContentWrapper, Wrapper } from './styled';
import { IconName } from '../Icon/path';

type Props = {
    icon?: IconName;
    align?: string;
    flat?: boolean;
    secondary?: boolean;
    label: string;
} & HTMLProps<HTMLButtonElement>;

export default function Button(props: Props) {
    const { label, disabled, icon, align, onClick, flat, secondary, className } = props;
    const { currentTheme, pointingMethod } = useTheme();

    return (
        <Wrapper
            className={className}
            align={align}
            $currentTheme={currentTheme}
            disabled={disabled}
            onClick={onClick}
            $flat={flat}
            $secondary={secondary}>
            <ContentWrapper>
                {pointingMethod === 'touch' ? label : <Label text={label} />}
                {pointingMethod === 'touch' && icon ? <Icon name={icon} /> : <ButtonIcon name={icon} />}
            </ContentWrapper>
        </Wrapper>
    )
}