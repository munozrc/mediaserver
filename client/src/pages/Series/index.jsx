import MediaCard from '../../components/MediaCard'
import useMedia from '../../hooks/useMedia'
import Container from '../../layouts/Container'
import GridContainer from '../../layouts/GridContainer'
import Header from '../../layouts/Header'

const Series = () => {
  const { series } = useMedia()
  return (
    <Container>
      <Header />
      <GridContainer>
        {
          series.map(serie => (
            <MediaCard
              key={serie.id}
              id={serie.id}
              image={serie.poster}
              title={serie.title}
              type='series'
            />
          ))
        }
      </GridContainer>
    </Container>
  )
}

export default Series
