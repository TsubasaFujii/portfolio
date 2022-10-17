import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Layout from './routers/Layout';
import PageNotFound from './routers/PageNotFound';
import Home from './routers/Home';
import Projects from './routers/Projects';
import Contact from './routers/Contact';
import { ThemeProvider } from './context';
import { GlobalStyles } from './components/styles/GlobalStyles';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
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
]);

function App() {
    return (
        <ThemeProvider>
            <GlobalStyles />
            <RouterProvider router={router} />
        </ThemeProvider>
    );
}

export default App;
