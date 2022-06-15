import { Routes, Route } from "react-router-dom";
import GlobalStyle from "./components/styles/GlobalStyles.styled";
import Theme from "./components/styles/Theme.styled";

function App() {
    return (
        <Theme>
            <GlobalStyle />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/projects' element={<Projects />} />
            </Routes>
        </Theme>
    );
}

export default App;
