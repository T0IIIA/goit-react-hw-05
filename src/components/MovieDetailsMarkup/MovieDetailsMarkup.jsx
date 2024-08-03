import s from './MovieDetailsMarkup.module.css'

const MovieDetailsMarkup = (movie) => {
  const mov = movie.movie
  const movieName = mov.title
  const overview = mov.overview
  const release = mov.release_date ? ` (${mov.release_date.slice(0, 4)})` : ''
  const userScore = mov.vote_average ? `User Score: ${(mov.vote_average * 10).toFixed(0)}%` : ''
  const imageUrl = mov.poster_path
    ? `https://image.tmdb.org/t/p/w500${mov.poster_path}`
    : '../../../img/alternative.png'
  const genres = mov.genres.map((genre) => genre.name).join(', ')


  
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
