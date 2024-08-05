import s from './MovieReviews.module.css'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { fetchMovieReviews } from '../../servises/api'

const MovieReviews = () => {
  const { movieId } = useParams()
  const [reviews, setReviews] = useState([])


  useEffect(() => {
    if (!movieId) return


    try {
      const getData = async () => {
        const data = await fetchMovieReviews(movieId)
        setReviews(data)
      }
      getData()
    } catch (error) {
      console.log(error)
    }
  }, [movieId])


  return (
    <ul className={s.list}>
      {reviews.map((review) => (
        <li key={review.id} className={s.item}>
          <p>{`👨 Author: ${review.author}`}</p>
          <p>{review.content}</p>
        </li>
      ))}
    </ul>
  )
}

export default MovieReviews
