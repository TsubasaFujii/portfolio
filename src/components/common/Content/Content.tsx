import { Wrapper } from './styled';

export default function Content(props: Props) {
    const { children, className } = props;
    return (
        <Wrapper className={className}>{children}</Wrapper>
    )
}