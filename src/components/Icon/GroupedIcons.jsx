import PropTypes from 'prop-types';
import Icon from './Icon';
import { GroupedIconWrapper } from './styled';

export default function GroupedIcons(props) {
    const { names, size } = props;
    return (
        <GroupedIconWrapper $size={size}>
            {names.map((tool, index) => <Icon key={index} name={tool} />)}
        </GroupedIconWrapper>
    )
}

GroupedIcons.propTypes = {
    names: PropTypes.array,
    size: PropTypes.string,
};