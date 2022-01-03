import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { MediaContextProvider } from './context/mediaContext'
import Home from './pages/Home'
import Movies from './pages/Movies'
import Series from './pages/Series'
import MovieDetail from './pages/MovieDetail'
import SerieDetail from './pages/SerieDetail'

const App = () => {
  return (
    <BrowserRouter>
      <MediaContextProvider>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/movies' element={<Movies />} />
          <Route path='/series' element={<Series />} />
          <Route path='/movies/:id' element={<MovieDetail />} />
          <Route path='/series/:id' element={<SerieDetail />} />
        </Routes>
      </MediaContextProvider>
    </BrowserRouter>
  )
}

export default App
