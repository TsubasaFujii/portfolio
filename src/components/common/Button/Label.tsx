import { LabelWrapper } from './styled';

type Props = {
    text: string;
}

export default function Label(props: Props) {
    const { text } = props;
    return (
        <LabelWrapper>
            {text}
        </LabelWrapper>
    );
}