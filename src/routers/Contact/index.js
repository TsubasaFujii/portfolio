import { lazy, Suspense } from 'react';
import Spinner from '../../components/Spinner';

const ContactPage = lazy(() => import('./Contact'));

function Contact() {
    return (
        <Suspense fallback={<Spinner />}>
            <ContactPage />
        </Suspense>
    );
}

export default Contact;