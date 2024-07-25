import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import ListProvider from './contexts/ListContext.jsx'
import WeatherProvider from './contexts/WeatherContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WeatherProvider>
      <ListProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ListProvider>
    </WeatherProvider>
  </React.StrictMode>,
)
