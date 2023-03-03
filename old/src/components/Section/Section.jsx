import PropTypes from 'prop-types';
import { Wrapper } from './styled';

export default function Section(props) {
    const { children, className } = props;

    return (
        <Wrapper className={className}>{children}</Wrapper>
    )
}

Section.propTypes = {
    className: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.string,
        PropTypes.object,
    ]),
}