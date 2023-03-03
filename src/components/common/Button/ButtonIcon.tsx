import { IconWrapper } from './styled';
import PropTypes from 'prop-types';
import { Icon } from '../Icon';

const iconMotion = {
    hidden: {
        opacity: 0,
    },
    hover: {
        opacity: 1,
    },
};

export default function ButtonIcon(props) {
    const { name } = props;
    return (
        <IconWrapper
            variants={iconMotion}
            layout>
            {<Icon name={name} />}
        </IconWrapper>
    );
}

ButtonIcon.propTypes = {
    name: PropTypes.string,
};