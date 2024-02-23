import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import * as bootstrap from 'bootstrap'

// import components
import Navbar from './components/Navbar.jsx';
import Header from './components/Header.jsx';
import CardsGrid from './components/CardsGrid.jsx';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Header />
      <CardsGrid />

    </>
  )
}

export default App
