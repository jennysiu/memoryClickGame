import "./styling/navbar.css"

function Navbar( {gameStatus} ) {
  return (
    
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="collapse navbar-collapse" id="navbar-items-box">
          <ul className="navbar-nav navbar-list">
            <a className="navbar-brand" href="#">Memory Clicky Game</a>
            <li 
            className="list-item"
            id="game-status-msg"
            >{gameStatus.message}</li>
            <li className="list-item">Score: {gameStatus.gameScore} | Top Score: {gameStatus.topScore}</li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar;