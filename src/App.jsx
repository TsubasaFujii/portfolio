import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './layouts/Root';
import Home from './pages/Home';
import PageNotFound from './pages/PageNotFound';
import Projects from './pages/Projects';

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
