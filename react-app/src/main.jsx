import '@fortawesome/fontawesome-free/css/all.min.css';
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx' // <-- این خط باید App را ایمپورت کند
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App /> {/* <-- اینجا App رندر می‌شود */}
  </React.StrictMode>,
)