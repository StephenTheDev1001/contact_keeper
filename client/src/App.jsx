import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import About from './components/pages/About'
import Home from './components/pages/Home';

const App = () => {
  return (

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

  )
}
export default App