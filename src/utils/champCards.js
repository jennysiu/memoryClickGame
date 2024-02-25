import champsData from "../data/champions.json"

function gameRandomChamps() {
    let gameRandomChampsArray = [];
    while (gameRandomChampsArray.length < 12) {
      let generateRandomChamp = champsData[Math.floor(Math.random() * champsData.length)];

      if (!gameRandomChampsArray.includes(generateRandomChamp)){
        gameRandomChampsArray.push(generateRandomChamp);
      }

    }
    return gameRandomChampsArray;
}

export default gameRandomChamps();