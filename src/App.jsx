import { Route, Routes } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import Navigation from './components/Navigation/Navigation'
import Loader from './components/Loader/Loader'

const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'))
const HomePage = lazy(() => import('./pages/HomePage/HomePage'))
const MoviesPage = lazy(() => import('./pages/MoviesPage/MoviesPage'))
const MovieDetailsPage = lazy(() => import('./pages/MovieDetailsPage/MovieDetailsPage'))
// const MovieCast = lazy(() => import('./components/MovieCast/MovieCast'))
// const MovieReviews = lazy(() => import('./components/MovieReviews/MovieReviews'))

const App = () => {
  return (
    <>
      <Navigation />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/movies' element={<MoviesPage />} />

          <Route path='/movies/:movieId' element={<MovieDetailsPage />}>
            {/* <Route path='/movies/:movieId/cast' element={<MovieCast />} />
            <Route path='/movies/:movieId/reviews' element={<MovieReviews />} /> */}
          </Route>

          <Route path='*' element={<NotFoundPage />}></Route>
        </Routes>
      </Suspense>
    </>
  )
}

export default App
