import React from 'react'
   import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './page/Home'
import About from './page/About';
function App() {
  return (
    <div>
  
    <Router>
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
 

    </div>
  )
}

export default App