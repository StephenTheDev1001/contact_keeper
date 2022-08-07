import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import About from './components/pages/About'
import Home from './components/pages/Home'

import ContactState from './context/contact/ContactState'
import './App.css'

const App = () => {
  return (
    <ContactState>
      <BrowserRouter>
        <>
          <Navbar />
          <div className="container">
            <Routes>
              <Route exact path='/' element={<Home />} />
              <Route exact path='/about' element={<About />} />
            </Routes>
          </div>
        </>
      </BrowserRouter>
    </ContactState>
  )
}
export default App