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

  const [gameStatus, setGameStatus] = useState({
    gameScore: 0,
    topScore: 0,
    message: "Click on an image to begin!"
  })


  return (
    <>
      <Navbar gameStatus={gameStatus} setGameStatus={setGameStatus}/>
      <Header />
      <CardsGrid gameStatus={gameStatus} setGameStatus={setGameStatus}/>

    </>
  )
}

export default App
