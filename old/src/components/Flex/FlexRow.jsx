import PropTypes from 'prop-types';
import { RowWrapper } from './styled';

export default function FlexRow(props) {
    const { children, className, onClick } = props;
    return (
        <RowWrapper className={className} onClick={onClick}>{children}</RowWrapper>
    )
}

FlexRow.propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func,
    children: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.string,
        PropTypes.object,
    ]),
}