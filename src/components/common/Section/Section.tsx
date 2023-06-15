import { HTMLProps } from 'react';
import { Wrapper } from './styled';

export default function Section(props: HTMLProps<HTMLDivElement>) {
    const { children, className } = props;

    return (
        <Wrapper className={className}>{children}</Wrapper>
    )
}