import { Link } from 'react-router-dom'
import s from './NotFoundPage.module.css'

const NotFoundPage = () => {
  return (
    <div className={s.container}>
      <img src="/img/pageNotFound.png" alt="Page Not Found" width="368" />
      <div className={s.text}>
        <h1>Opps...Page is not found</h1>
        <p>You can back to site:</p>
        <Link to="./" className={s.link}>
          {' '}
          click here{' '}
        </Link>
      </div>
    </div>
  )
}

export default NotFoundPage