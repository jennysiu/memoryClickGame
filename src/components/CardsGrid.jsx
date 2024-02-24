import React, { useState } from 'react';

// import champsData from "../data/champions.json"
import gameRandomChamps from '../utils/champCards';
import "./styling/CardsGrid.css"

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
    })

    
    ;


  }
  
  return (
    <>  
      <div className="cards-grid">
        {/* <button onClick={startGame}>Start Game</button> */}
        
        {gameRandomChamps.map((champ, index) => (
          <div className="card" key={index}>
            <img src={champ.icon} alt={champ.name} onClick={handleChampClick}/>
          </div>
        ))}
      </div>
    </>
  );
}

export default CardsGrid;

// psuedo:
// create a random grid of cards of 12 (out of 240 152)
// each card has a unique image and ID
// this seletcion of cards will stay the same for the rest of the game

// first card - amy card can be clicked on
  // this card is stored into state as current champ
  // score goes up by one 
  // top score is updated if score is higher than top score
// 12 cards shuffle after each click
  // repeat process - if new card is clicked on, it is stored into state

// after first card, if a card is clicked on twice, the game is over

