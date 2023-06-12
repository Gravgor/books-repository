import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Books from './pages/Books'
import Authors from './pages/Authors'

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Routes>
           <Route path='/' element={<Home />} />
           <Route path='/books' element={<Books />} />
           <Route path='/authors' element={<Authors />} />
           <Route path='/books/:name' element={<Books />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
