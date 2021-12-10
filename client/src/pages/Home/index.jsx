import { Outlet } from 'react-router-dom'
import useMedia from '../../hooks/useMedia'
import Container from '../../layouts/Container'
import GridContainer from '../../layouts/GridContainer'
import Header from '../../layouts/Header'
import Card from './components/Card'

const Home = () => {
  const { media } = useMedia()
  return (
    <Container>
      <Header />
      <Outlet />
      <GridContainer>
        {
            media.movies.map(movie => (
              <Card
                key={movie.id}
                id={movie.id}
                image={movie.poster}
                title={movie.title}
              />
            ))
          }
      </GridContainer>
    </Container>
  )
}

export default Home
