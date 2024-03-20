import React, { useState } from 'react';

// import champsData from "../data/champions.json"
import gameRandomChamps from '../utils/champCards';
import "./styling/cardsGrid.css"

function CardsGrid( { gameStatus, setGameStatus} ) {
  const [chosenChamps, setChamp] = useState([]);

  const handleChampClick = (e) => {
    let champName = e.target.alt;
      setChamp([...chosenChamps, champName]);
    if (chosenChamps.includes(champName)) {
      
      gameOver()
    } else {
      console.log(champName);
      setGameStatus({ 
      ...gameStatus, 
      message:"You guessed correctly!",
      gameScore:gameStatus.gameScore + 1})
      shuffleArray(gameRandomChamps)
    }
  }
  
  // function to shuffle cards after each click
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      // Generate a random index from 0 to i
      const j = Math.floor(Math.random() * (i + 1));
      
      // Swap elements at indices i and j
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  const gameOver = () => {
    console.log("Game Over");

    const newTopScore = gameStatus.gameScore > gameStatus.topScore ? gameStatus.gameScore : gameStatus.topScore;

    setGameStatus({ 
    ...gameStatus, 
    message:"You guessed incorrectly!",
    gameScore: 0,
    topScore: newTopScore
    });
  }
  
  return (
    <>  
    <div className='container'>
        <div className="cards-grid">
          {/* <button onClick={startGame}>Start Game</button> */}
          
          {gameRandomChamps.map((champ, index) => (
            <div className="card" key={index}>
              <img 
              src={champ.icon} 
              alt={champ.name} 
              onClick={handleChampClick}/>
            </div>
          ))}
        </div>
    </div>
    </>
  );
}

export default CardsGrid;
