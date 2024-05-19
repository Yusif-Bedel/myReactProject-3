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
          <li><Link to={"/admin"}>Admin</Link></li>
          <li><Link to={"#"}>About</Link></li>
        </ul>
        <div className='navIcons'>
          <i class="fa-solid fa-magnifying-glass"></i>
          <Link to={"wishlist"}><i class="fa-regular fa-heart"></i></Link>
          <Link to={"basket"}><i class="fa-solid fa-cart-shopping"></i></Link>
        </div>
      </div>
    </nav>
  )
}

export default Header
