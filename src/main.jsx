import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Navbar from './Component/Navbar/Navbar.jsx'
import Footer from './Component/Footer/Footer.jsx'
import Body from './Component/Body/Body.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar/>
    <Body/>
    <Footer/>

  </React.StrictMode>,
)
