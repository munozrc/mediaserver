import Container from '../../layouts/Container'
import GridContainer from '../../layouts/GridContainer'
import Header from '../../layouts/Header'
import Card from './components/Card'

const linkImage = 'https://m.media-amazon.com/images/M/MV5BNzU3NDg4NTAyNV5BMl5BanBnXkFtZTcwOTg2ODg1Mg@@._V1_FMjpg_UY740_.jpg'

const Home = () => {
  return (
    <Container>
      <Header />
      <GridContainer>
        {[0, 1, 2, 3].map(ele => <Card key={ele} id={ele} image={linkImage} title='Harry Potter y El Misterio del Príncipe' />)}
      </GridContainer>
    </Container>
  )
}

export default Home
