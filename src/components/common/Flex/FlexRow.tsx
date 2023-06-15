import { HTMLProps } from 'react';
import { RowWrapper } from './styled';

export default function FlexRow(props: HTMLProps<HTMLDivElement>) {
    const { children, className, onClick } = props;
    return (
        <RowWrapper className={className} onClick={onClick}>{children}</RowWrapper>
    )
}