import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import { scrollTo } from '@/utils/window';

import { SubHeading } from './SubHeading';

import { Button } from '@/components/common';
import { Heading } from './Heading';
import { BackgroundWrapper, ContentWrapper, MotionCircle, Wrapper } from './styled';

export default function Hero() {
    const [headerHeight, setHeaderHeight] = useState<number | null>(null);
    const { ref, inView } = useInView({
        initialInView: true,
    });

    function handleOnClick() {
        scrollTo('#projects');
    }

    useEffect(() => {
        function handleResize() {
            const header = document.querySelector('header');
            if (!header) return;
            setHeaderHeight(header.clientHeight);
        }

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <Wrapper $headerHeight={headerHeight} ref={ref}>
            <ContentWrapper>
                <Heading />
                <SubHeading />
                <Button
                    label='Check my projects'
                    icon='chevronDown'
                    onClick={handleOnClick} />
            </ContentWrapper>
            <BackgroundWrapper>
                <svg
                    viewBox='0 0 100 100'
                    xmlns='http://www.w3.org/2000/svg'>
                    <MotionCircle
                        initial={{
                            cx: '50%',
                            cy: '55%',
                            scale: 0.5,
                        }}
                        animate={{
                            cx: inView ? '80%' : 0,
                            scale: 1,
                            transition: {
                                default: {
                                    type: 'spring',
                                    damping: 8,
                                    stiffness: 80,
                                },
                                scale: {
                                    duration: 0.5,
                                }
                            },
                        }}
                        r='40%'
                    />
                </svg>
            </BackgroundWrapper>
        </Wrapper >
    )
}