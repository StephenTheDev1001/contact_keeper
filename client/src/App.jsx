import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Home from './components/pages/Home'
import About from './components/pages/About'
import './App.css';

import ContactState from './context/contact/ContactState'

const App = () => {
  return (
    <ContactState>
      <Router>
        <>
          <Navbar />
          <div className="container">
            <Routes>
              <Route exact path='/' element={<Home />} />
              <Route exact path='/about' element={<About />} />
            </Routes>
          </div>
        </>
      </Router>
    </ContactState>
  )
}
export default App