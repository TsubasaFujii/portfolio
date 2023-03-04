import { ColumnWrapper } from './styled';

export default function FlexColumn(props: Props) {
    const { children, className } = props;
    return (
        <ColumnWrapper className={className}>{children}</ColumnWrapper>
    )
}