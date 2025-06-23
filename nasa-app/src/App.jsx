import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import APOD from './pages/APOD';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<APOD />} />
        {/* Future: <Route path="/mars" element={<MarsPhotos />} /> */}
      </Routes>
    </Router>
  );
}

export default App;


