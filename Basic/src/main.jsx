import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Count from './Count.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Count />
  </React.StrictMode>,
)
