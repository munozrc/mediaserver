import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { MediaContextProvider } from './context/mediaContext'
import Home from './pages/Home'
import ContentDetail from './pages/Home/components/ContentDetail'

const App = () => {
  return (
    <BrowserRouter>
      <MediaContextProvider>
        <Routes>
          <Route path='/' element={<Home />}>
            <Route path='/detail/:id' element={<ContentDetail />} />
          </Route>
        </Routes>
      </MediaContextProvider>
    </BrowserRouter>
  )
}

export default App
