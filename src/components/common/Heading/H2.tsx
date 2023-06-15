import { HTMLProps } from 'react';
import { H2Wrapper } from './styled';

type Props = {
    isVisible: boolean;
} & HTMLProps<HTMLHeadingElement>;

const headingMotion = {
    slideIn: { x: '-1rem', opacity: 0 },
    fallIn: { y: '-1rem', opacity: 0 },
    visible: { x: 0, opacity: 1 },
}

export default function H2(props: Props) {
    const { isVisible, children } = props;

    return (
        <H2Wrapper
            animate={isVisible ? 'hidden' : 'slideIn'}
            variants={headingMotion}
            transition={{
                ease: 'linear',
                duration: 0.2
            }}
        >
            {children}
        </H2Wrapper>
    )
}