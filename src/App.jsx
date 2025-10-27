import React from 'react'
import ServicePage from './Components/ServicePage'
import ContactPage from './Components/ContactPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Components/HomePage';
const App = () => {
  return (
    <div>
      {/* <Servicepage /> */}
      <Router>
        <Routes>
          <Route path="/" index element={<HomePage />} />
          <Route path="/Service" element={<ServicePage/>} />
          <Route path="/Contact" element={<ContactPage/>} />
          {/* <Route path='' /> */}
        </Routes>
      </Router>

    </div>
  )
}

export default App