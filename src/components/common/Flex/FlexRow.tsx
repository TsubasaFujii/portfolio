import { RowWrapper } from './styled';

export default function FlexRow(props: Props & { onClick?: () => void }) {
    const { children, className, onClick } = props;
    return (
        <RowWrapper className={className} onClick={onClick}>{children}</RowWrapper>
    )
}