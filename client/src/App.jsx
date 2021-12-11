import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { MediaContextProvider } from './context/mediaContext'
import Home from './pages/Home'
import MovieDetail from './components/MovieDetail'

const App = () => {
  return (
    <BrowserRouter>
      <MediaContextProvider>
        <Routes>
          <Route path='/' element={<Home />}>
            <Route path='/detail/:id' element={<MovieDetail />} />
          </Route>
        </Routes>
      </MediaContextProvider>
    </BrowserRouter>
  )
}

export default App
