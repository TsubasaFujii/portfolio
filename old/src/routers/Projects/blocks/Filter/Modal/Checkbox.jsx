import PropTypes from 'prop-types';

export default function Checkbox(props) {
    const { item, handleOnChange, value } = props;
    return (
        <div>
            <input
                type="checkbox"
                id={item}
                name='filter'
                checked={value}
                onChange={handleOnChange} />
            <label htmlFor={item}>{item}</label>
        </div>
    )
}

Checkbox.propTypes = {
    item: PropTypes.string,
    value: PropTypes.bool,
    handleOnChange: PropTypes.func,
}