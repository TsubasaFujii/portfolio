import PropTypes from 'prop-types';

import Form from './Form';
import { FormHeading, Wrapper, Text } from './styled';

export default function ContactForm(props) {
    const { contactRef } = props;

    return (
        <Wrapper ref={contactRef}>
            <FormHeading>
                Contact me
            </FormHeading>
            <Text>Thank you, I&#39;ll reply you as soon as possible!</Text>
            <Form />
        </Wrapper>
    )
}

ContactForm.propTypes = {
    contactRef: PropTypes.func,
};