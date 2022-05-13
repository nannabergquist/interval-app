import React from 'react'
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';

function App() {
  return (
    <section>
      <Router>
        <Routes>
          <Route path='/' element={<LandingPage />} />
        </Routes>
      </Router>
    </section>
  )
}

export default App; 
