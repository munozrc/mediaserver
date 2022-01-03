import useMedia from '../../hooks/useMedia'
import Container from '../../layouts/Container'
import GridContainer from '../../layouts/GridContainer'
import Header from '../../layouts/Header'
import MediaCard from '../../components/MediaCard'

const Series = () => {
  const { media } = useMedia()
  return (
    <Container>
      <Header />
      <GridContainer>
        {
          media.series.map(serie => (
            <MediaCard
              key={serie.id}
              id={serie.id}
              image={serie.poster}
              title={serie.title}
              type='serie'
            />
          ))
        }
      </GridContainer>
    </Container>
  )
}

export default Series
