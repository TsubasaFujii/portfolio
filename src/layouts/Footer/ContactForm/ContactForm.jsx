import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { ThemeContext } from '../../../components/styles/ContextProviders';

import Form from './Form';
import { FormHeading, Wrapper } from './styled';

export default function ContactForm(props) {
    const { contactRef } = props;
    const { currentTheme } = useContext(ThemeContext);

    return (
        <Wrapper ref={contactRef}>
            <FormHeading $currentTheme={currentTheme}>
                Contact me
            </FormHeading>
            <Form />
        </Wrapper>
    )
}

ContactForm.propTypes = {
    contactRef: PropTypes.func,
};