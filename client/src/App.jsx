import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { MediaContextProvider } from './context/mediaContext'
import Home from './pages/Home'
import Movies from './pages/Movies'
import Series from './pages/Series'
import MovieDetail from './pages/MovieDetail'

const App = () => {
  return (
    <BrowserRouter>
      <MediaContextProvider>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/movies' element={<Movies />} />
          <Route path='/series' element={<Series />} />
          <Route path='/movie/:id' element={<MovieDetail />} />
        </Routes>
      </MediaContextProvider>
    </BrowserRouter>
  )
}

export default App
