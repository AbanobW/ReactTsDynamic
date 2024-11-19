import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
// import About from './pages/About/About';
// import NotFound from './pages/NotFound/NotFound';

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                {/* <Route path="/about" element={<About />} />
                <Route path="*" element={<NotFound />} /> */}
            </Routes>
        </Router>
    );
};

export default App;
