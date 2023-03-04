import { useInView } from 'react-intersection-observer';

import { TextWrapper } from './styled';

export default function Text(props: Props) {
    const { children } = props;
    const { ref, inView } = useInView({
        initialInView: false,
        threshold: 0.3,
    });

    return (
        <TextWrapper ref={ref} inView={inView}>
            {children}
        </TextWrapper>
    )
}