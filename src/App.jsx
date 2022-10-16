import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Root from './routers/Root';
import PageNotFound from './routers/PageNotFound';
import Home from './routers/Home';
import Projects from './routers/Projects';
import Contact from './routers/Contact';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <PageNotFound />,
        children: [
            {
                path: '',
                element: <Home />
            },
            {
                path: 'projects',
                element: <Projects />
            }, {
                path: 'contact',
                element: <Contact />
            },
        ]
    }
])
function App() {
    return (
        <RouterProvider router={router} />
    );
}

export default App;
