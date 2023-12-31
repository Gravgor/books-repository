import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Books from './pages/Books'
import Authors from './pages/Authors'
import AuthorPage from './pages/AuthorPage'
import BookPage from './pages/BookPage'
import NotFound from './components/NotFound'

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Routes>
           <Route path='/' element={<Home />} />
           <Route path='/books' element={<Books />} />
           <Route path='/authors' element={<Authors />} />
           <Route path='/books/:id' element={<BookPage />} />
           <Route path='/authors/:name' element={<AuthorPage />} />
           <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
