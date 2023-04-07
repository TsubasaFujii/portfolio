import { useTheme } from 'styled-components';
import { FlexRow } from '../Flex';
import { P } from '../Text';
import { Wrapper, Circle } from './styled';


export default function Spinner() {
    const theme = useTheme();
    return (
        <Wrapper>
            <FlexRow>
                <P>Loading...</P>

                <svg
                    width='3rem'
                    height='3rem'
                    viewBox='0 0 10 10'
                    xmlns='http://www.w3.org/2000/svg'>
                    <Circle
                        fill={theme.colors.primary}
                        cx='50%'
                        cy='50%'
                        r='50%' />
                </svg>
            </FlexRow>
        </Wrapper>
    )
}