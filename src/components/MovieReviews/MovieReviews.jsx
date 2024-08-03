import s from './MovieReviews.module.css'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'

const MovieDetailsPage = () => {
  const { movieId } = useParams()
  useEffect(() => {
    if (!movieId) return
  }, [movieId])
  return <div>MovieDetailsPage</div>
}

export default MovieDetailsPage
