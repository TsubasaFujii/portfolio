import { PATH } from './path';
import { Wrapper } from './styled';

type Props = {
    name: IconName;
    className?: string;
}

export default function Icon(props: Props) {
    const { name, className } = props;
    const { path, fill, stroke, width } = PATH[name];

    return (
        <Wrapper className={className} title={name.charAt(0).toUpperCase() + name.slice(1)}>
            <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'>
                {
                    path.map((p, index) => (
                        <path
                            key={index}
                            stroke={stroke}
                            strokeWidth={width}
                            fill={fill}
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d={p} />
                    ))
                }
            </svg>
        </Wrapper>
    )
}