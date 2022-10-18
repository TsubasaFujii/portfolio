import { useContext } from 'react';
import PropTypes from 'prop-types';

import { ThemeContext } from '../../context';

import Label from './Label';
import ButtonIcon from './ButtonIcon';
import { Icon } from '../Icon';
import { ContentWrapper, Wrapper } from './styled';

export default function Button(props) {
    const { label, disabled, icon, align, onClick, flat, secondary, className } = props;
    const { currentTheme, pointingMethod } = useContext(ThemeContext);

    return (
        <Wrapper
            className={className}
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
    className: PropTypes.string,
    onClick: PropTypes.func,
    flat: PropTypes.bool
};