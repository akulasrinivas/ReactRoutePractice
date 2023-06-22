import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="bg-container">
    <div className="icon-container">
      <img
        className="img"
        alt="wave"
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
      />
      <h1 className="wave-heading">Wave</h1>
    </div>
    <ul className="list-items">
      <li className="item">
        <Link to="/">Home</Link>
      </li>
      <li className="item">
        <Link to="/about">About</Link>
      </li>
      <li className="item">
        <Link to="/contact"> Contact</Link>
      </li>
    </ul>
  </nav>
)
export default Header
