import s from './MovieCast.module.css'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const MovieDetailsPage = () => {
  const { movieId } = useParams()
  useEffect(() => {
    if (!movieId) return
  }, [movieId])

  return <div>MovieDetailsPage</div>
}

export default MovieDetailsPage
