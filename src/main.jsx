import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './style.css'
import 'modern-normalize'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
