import Container from '../../layouts/Container'
import Header from '../../layouts/Header'

const Home = () => {
  return (
    <Container>
      <Header />
      <section>
        {[0, 1, 2, 3].map(ele => <a key={ele}> {ele} </a>)}
      </section>
    </Container>
  )
}

export default Home
