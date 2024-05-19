import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <nav>
      <div className="container">
        <Link to={"/"}><img src="https://aranoz.live/img/logo.png" alt="" /></Link>
        <ul>
          <li><Link to={"/"}>Home</Link></li>
          <li><Link to={"/admin"}>Products</Link></li>
          <li><Link to={"add"}>AddPage</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Header
