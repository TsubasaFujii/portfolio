import { HTMLProps } from 'react';
import { useTheme } from 'styled-components';

import Label from './Label';
import ButtonIcon from './ButtonIcon';
import { Icon } from '../Icon';
import { ContentWrapper, Wrapper } from './styled';

type Props = {
    icon?: IconName;
    align?: string;
    flat?: boolean;
    secondary?: boolean;
    label: string;
} & HTMLProps<HTMLButtonElement>;

export default function Button(props: Props) {
    const { label, disabled, icon, align, onClick, flat, secondary, className } = props;
    const { pointingMethod } = useTheme();

    return (
        <Wrapper
            className={className}
            $secondary={secondary}
            $flat={flat}
            disabled={disabled}
            align={align}
            onClick={onClick}
        >
            <ContentWrapper>
                {pointingMethod === 'touch' ? label : <Label text={label} />}
                {icon && (pointingMethod === 'touch' ? <Icon name={icon} /> : <ButtonIcon name={icon} />)}
            </ContentWrapper>
        </Wrapper>
    )
}