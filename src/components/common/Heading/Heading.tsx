import { Wrapper } from './styled';
import { HTMLProps } from 'react';

type Props = {
    size?: number;
} & HTMLProps<HTMLHeadingElement>;

export default function Heading(props: Props) {
    const { size, children, className } = props;

    return (
        <Wrapper
            $size={size}
            className={className}>
            {children}
        </Wrapper>
    )
}