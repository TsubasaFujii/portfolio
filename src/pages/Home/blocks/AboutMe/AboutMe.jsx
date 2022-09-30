import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import { Wrapper } from './styled';
import { H2, NewLine, Content } from '../../../../components/';
import Introduction from './Introduction';

export default function AboutMe() {
    const [isVisible, setIsVisible] = useState(false);
    const { ref, entry } = useInView({
        initialInView: false,
        threshold: 0.2,
    });

    useEffect(() => {
        if (!entry) return;
        setIsVisible(entry.isIntersecting);
    }, [entry]);

    return (
        <Wrapper ref={ref}>
            <Content>
                <H2 isVisible={isVisible}>
                    <NewLine>about</NewLine>
                    <NewLine>me</NewLine>
                </H2>
                <Introduction isVisible={isVisible} />
            </Content>
        </Wrapper >
    )
}
