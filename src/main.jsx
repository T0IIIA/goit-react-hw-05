import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'modern-normalize'
import './style.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
