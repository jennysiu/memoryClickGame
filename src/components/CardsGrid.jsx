import champsData from "../data/champions.json"

function CardsGrid() {
  // generate 12 random numbers from list of champs in json file
  let gameRandomChamps = [];

  while (gameRandomChamps.length < 12) {
    let generateRandomChamp = champsData[Math.floor(Math.random() * champsData.length)];

    if (!gameRandomChamps.includes(generateRandomChamp)){
      gameRandomChamps.push(generateRandomChamp);
    }
  }

  console.log(champsData);
  console.log(gameRandomChamps);

  
  return (
    <>  
      <div className="cards-grid">
        {gameRandomChamps.map((champ, index) => (
          <div className="card" key={index}>
            <img src={champ.icon} alt={champ.name} />
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

