import { HTMLProps } from 'react';
import { ColumnWrapper } from './styled';

export default function FlexColumn(props: HTMLProps<HTMLDivElement>) {
    const { children, className } = props;
    return (
        <ColumnWrapper className={className}>{children}</ColumnWrapper>
    )
}