import PropTypes from 'prop-types';
import { ColumnWrapper } from './styled';

export default function FlexColumn(props) {
    const { children, className } = props;
    return (
        <ColumnWrapper className={className}>{children}</ColumnWrapper>
    )
}

FlexColumn.propTypes = {
    className: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.string,
        PropTypes.object,
    ]),
}