import PropTypes from 'prop-types';

import Form from './Form';
import { FormHeading, Wrapper } from './styled';

export default function ContactForm(props) {
    const { contactRef } = props;

    return (
        <Wrapper ref={contactRef}>
            <FormHeading>
                Contact me
            </FormHeading>
            <Form />
        </Wrapper>
    )
}

ContactForm.propTypes = {
    contactRef: PropTypes.func,
};