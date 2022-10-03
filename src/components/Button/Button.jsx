import { useContext } from 'react';
import PropTypes from 'prop-types';

import Label from './Label';
import ButtonIcon from './ButtonIcon';
import { ThemeContext } from '../styles/ContextProviders';
import { ContentWrapper, Wrapper } from './styled';
import { Icon } from '../Icon';

export default function Button(props) {
    const { label, disabled, icon, align, onClick, flat, secondary } = props;
    const { currentTheme, pointingMethod } = useContext(ThemeContext);

    return (
        <Wrapper
            align={align}
            $currentTheme={currentTheme}
            disabled={disabled}
            initial={'hidden'}
            whileHover={!disabled && 'hover'}
            whileTap={!disabled && { scale: 0.9 }}
            onClick={onClick}
            $flat={flat}
            $secondary={secondary}>
            <ContentWrapper>
                {pointingMethod === 'touch' ? label : <Label text={label} />}
                {pointingMethod === 'touch' ? <Icon name={icon} /> : <ButtonIcon name={icon} />}
            </ContentWrapper>
        </Wrapper>
    )
}

Button.propTypes = {
    label: PropTypes.string,
    disabled: PropTypes.bool,
    secondary: PropTypes.bool,
    icon: PropTypes.string,
    align: PropTypes.string,
    onClick: PropTypes.func,
    flat: PropTypes.bool
};