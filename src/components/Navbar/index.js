import './index.css'

const Navbar = props => {
  const {countDown, score} = props

  return (
    <nav className="navbar-container">
      <ul className="unordered-list-nav-container">
        <li>
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
            alt="website logo"
            className="navbar-logo"
          />
        </li>

        <li className="score-timer-container">
          <p className="score-text">
            Score: <span className="score-number">{score}</span>
          </p>
          <div className="timer-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
              alt="timer"
              className="timer-img"
            />
            <p className="timer-countdown">{countDown} sec</p>
          </div>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
