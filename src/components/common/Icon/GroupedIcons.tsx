import PropTypes from 'prop-types';
import Icon from './Icon';

import { GroupedIconWrapper } from './styled';

type Props = {
    names: IconName[];
    size?: string;
}

export default function GroupedIcons(props: Props) {
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