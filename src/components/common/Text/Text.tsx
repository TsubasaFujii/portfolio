import { useInView } from 'react-intersection-observer';

import { TextWrapper } from './styled';
import { HTMLProps } from 'react';

export default function Text(props: HTMLProps<HTMLParagraphElement>) {
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