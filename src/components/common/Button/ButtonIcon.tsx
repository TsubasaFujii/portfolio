import { Icon } from '../Icon';
import { IconWrapper } from './styled';

type Props = {
    name: IconName;
}

export default function ButtonIcon(props: Props) {
    const { name } = props;
    return (
        <IconWrapper>
            {<Icon name={name} />}
        </IconWrapper>
    );
}