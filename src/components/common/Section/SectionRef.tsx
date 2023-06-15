import { ComponentPropsWithRef, forwardRef, HTMLProps, Ref } from 'react';

import { Wrapper } from './styled';

export const SectionRef = forwardRef((props: HTMLProps<HTMLDivElement> & ComponentPropsWithRef<'section'>, ref?: Ref<HTMLElement>) => {
    const { children, className, id } = props;
    return (
        <Wrapper
            ref={ref}
            id={id}
            className={className}>
            {children}
        </Wrapper>
    )
});

SectionRef.displayName = 'Section';
