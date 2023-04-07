import { RefObject } from 'react';
import Form from './Form';
import { FormHeading, Wrapper, Text } from './styled';

type Props = {
    contactRef: RefObject<HTMLDivElement>;
}

export default function ContactForm() {

    return (
        <Wrapper>
            <FormHeading>
                Contact me
            </FormHeading>
            <Text>Thank you, I&#39;ll reply you as soon as possible!</Text>
            <Form />
        </Wrapper>
    )
}