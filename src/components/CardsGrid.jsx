import React, { useState } from 'react';

// import champsData from "../data/champions.json"
import gameRandomChamps from '../utils/champCards';
import "./styling/CardsGrid.css"

function CardsGrid( { gameStatus, setGameStatus} ) {
  // generate 12 random numbers from list of champs in json file
  // let gameRandomChamps = [];

  // const startGame = () => {
  //     while (gameRandomChamps.length < 12) {
  //     let generateRandomChamp = champsData[Math.floor(Math.random() * champsData.length)];

  //     if (!gameRandomChamps.includes(generateRandomChamp)){
  //       gameRandomChamps.push(generateRandomChamp);
  //     }

      // console.log(gameRandomChamps)
  //   }
  // }


  const [champ, setChamp] = useState("");

  const handleChampClick = (e) => {
    let champName = e.target.alt;

    if (champ === champName) {
      gameOver()
    } else {
      setChamp(champName)
      setGameStatus({ ...gameStatus, message:"You guessed correctly!"})
      setGameStatus({ ...gameStatus, gameScore:gameStatus.gameScore + 1})


    }
  }

  const gameOver = () => {
    console.log("Game Over");

    setGameStatus({ ...gameStatus, message:"You guessed incorrectly!"});
    setGameStatus({ ...gameStatus, gameScore:gameStatus.gameScore + 1})

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
  // this card is stored into state as an array
  // score goes up by one 
  // top score is updated if score is higher than top score
// 12 cards shuffle after each click
  // repeat process - if new card is clicked on, it is stored into state

// after first card, if a card is clicked on twice, the game is over

