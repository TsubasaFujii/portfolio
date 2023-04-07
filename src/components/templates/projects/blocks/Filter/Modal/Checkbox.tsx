import { ChangeEvent } from 'react';

type Props = {
    item: string;
    value: boolean;
    handleOnChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default function Checkbox(props: Props) {
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