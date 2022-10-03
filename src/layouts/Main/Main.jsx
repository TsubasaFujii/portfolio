import { Route, Routes } from 'react-router-dom';

import Home from '../../pages/Home';
import Projects from '../../pages/Projects';

export default function Main() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
            </Routes>
        </>
    )
}
