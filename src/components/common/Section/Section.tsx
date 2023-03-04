import { Wrapper } from './styled';

export default function Section(props: Props) {
    const { children, className } = props;

    return (
        <Wrapper className={className}>{children}</Wrapper>
    )
}