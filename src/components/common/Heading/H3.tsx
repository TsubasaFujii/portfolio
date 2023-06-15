import { useInView } from 'react-intersection-observer';

import { AnimatedUnderline, H3Wrapper } from './styled';
import { HTMLProps } from 'react';

type Props = {
    isVisible?: boolean;
} & HTMLProps<HTMLSpanElement>;


const headingMotion = {
    slideIn: { x: '-1rem', opacity: 0 },
    fallIn: { y: '-1rem', opacity: 0 },
    visible: { x: 0, opacity: 1 },
}

export default function H3(props: Props) {
    const { children } = props;
    const { ref, inView } = useInView({
        initialInView: false,
        rootMargin: '0% 0% 5% 0%',
        threshold: 1,
    });

    return (
        <H3Wrapper
            animate={inView ? 'hidden' : 'fallIn'}
            variants={headingMotion}
            ref={ref}>
            <AnimatedUnderline className={inView ? 'shown' : undefined}>
                {children}
            </AnimatedUnderline>
        </H3Wrapper>
    )
}