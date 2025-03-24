import { createRoot } from 'react-dom/client'
import './reset.css'
import './index.css'
import App from './App.jsx'
import { ToastContainer } from 'react-toastify';
createRoot(document.getElementById('root')).render(
  <>
    <App />
    <ToastContainer />
  </>
)
