import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/Header'
import Breadcrumb from './components/Breadcrumb'
import Home from './pages/Home'
import Books from './pages/Books'

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Breadcrumb />
        <Routes>
           <Route path='/' element={<Home />} />
           <Route path='/books' element={<Books />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
