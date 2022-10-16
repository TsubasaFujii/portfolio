import PropTypes from 'prop-types';

import Form from './Form';
import { FormHeading, Wrapper } from './styled';

export default function ContactForm() {
    return (
        <Wrapper>
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