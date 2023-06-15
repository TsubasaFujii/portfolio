import { HTMLProps } from 'react';
import { useTheme } from 'styled-components';

import { Icon } from '../Icon';
import { Wrapper, ContentWrapper, IconWrapper, LabelWrapper } from './styled';
import { CSSProperties } from 'react';

type Props = {
    icon?: IconName;
    align?: 'left';
    alignSelf?: CSSProperties['alignSelf'];
    flat?: boolean;
    secondary?: boolean;
    label: string;
} & HTMLProps<HTMLButtonElement>;

function ButtonIcon(props: { name: IconName; }) {
    const { name } = props;
    return (
        <IconWrapper>
            {<Icon name={name} />}
        </IconWrapper>
    );
}

function Label(props: { text: string; }) {
    const { text } = props;
    return (
        <LabelWrapper>
            {text}
        </LabelWrapper>
    );
}

export default function Button(props: Props) {
    const { label, disabled, icon, align, flat, secondary, className, alignSelf, onClick } = props;
    const { pointingMethod } = useTheme();

    return (
        <Wrapper
            className={className}
            $secondary={secondary}
            $flat={flat}
            $align={align}
            $alignSelf={alignSelf}
            disabled={disabled}
            onClick={onClick}
        >
            <ContentWrapper>
                {
                    pointingMethod === 'touch' ?
                        label :
                        <Label text={label} />
                }
                {
                    icon &&
                    (
                        pointingMethod === 'touch' ?
                            <Icon name={icon} /> :
                            <ButtonIcon name={icon} />
                    )
                }
            </ContentWrapper>
        </Wrapper>
    )
}