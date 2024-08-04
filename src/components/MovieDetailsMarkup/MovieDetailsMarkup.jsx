import Loader from '../Loader/Loader'
import s from './MovieDetailsMarkup.module.css'


const MovieDetailsMarkup = ({ movie }) => {
  const defaultImg =
    'https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg'
  
  const movieName = movie.title
  const overview = movie.overview
  const release = movie.release_date ? ` (${movie.release_date.slice(0, 4)})` : ''
  const userScore = movie.vote_average ? `User Score: ${(movie.vote_average * 10).toFixed(0)}%` : ''
   const imageUrl = movie.poster_path
     ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
     : defaultImg
  const genres = movie.genres.map((genre) => genre.name).join(', ')


  if(!movie){
    return Loader
  }
  return (
    <div className={s.container}>
      <img className={s.image} src={imageUrl} alt={`cover image of the movie "${movieName}" `} />

      <div className={s.about}>
        <h2>
          {movieName} {release}
        </h2>
        <p className={s.info}>{userScore}</p>
        <h3>Overview</h3>
        <p className={s.info}>{overview}</p>
        <h4>Genres</h4>
        <p className={s.info}>{genres}</p>
      </div>
    </div>
  )
}

export default MovieDetailsMarkup
