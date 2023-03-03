import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import { scrollTo } from '@/utils/window';

import { SubHeading } from './SubHeading';

import BackgroundLayer from './BackgroundLayer';
import { Heading } from './Heading';
import { ContentWrapper, Wrapper } from './styled';
import { Button } from '@/components/common';

export default function Hero() {
    const [headerHeight, setHeaderHeight] = useState<number | null>(null);
    const { ref, inView } = useInView({
        initialInView: true,
    });

    function handleOnClick() {
        scrollTo('#projects');
    }

    useEffect(() => {
        const header = document.querySelector('header');

        function handleResize() {
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
                    align='flex-start'
                    icon='chevronDown'
                    onClick={handleOnClick} />
            </ContentWrapper>
            <BackgroundLayer isVisible={inView} headerHeight={headerHeight} />
        </Wrapper >
    )
}