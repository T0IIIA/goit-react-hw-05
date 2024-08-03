import { useLocation, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { fetchMovieDetails } from '../../servises/api'
import Loader from '../../components/Loader/Loader'
import MovieDetailsMarkup from '../../components/MovieDetailsMarkup/MovieDetailsMarkup'

const MovieDetailsPage = () => {
  const params = useParams()
  const location = useLocation()
  const [movie, setMovie] = useState(null)


  useEffect(() => {
    try {
      const getData = async () => {
        const data = await fetchMovieDetails(params.movieId)
        setMovie(data)
      }
      getData()
    } catch (error) {
      console.log(error)
    }
  }, [params.movieId])



  if (!movie) {
    return <Loader />
  }
  return (
    <>
      <MovieDetailsMarkup movie={movie} location={location} />
    </>
  )
}

export default MovieDetailsPage
