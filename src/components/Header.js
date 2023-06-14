import { React, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'

function Header() {
  const [showMenu, setShowMenu] = useState("md:hidden");
  const menuItems = [
    {
      title: "Home",
      key: "/",
    },
    {
      title: "Projects",
      key: "/projects",
    },
    {
      title: "Contact",
      key: "/contact",
    },
  ];

  const pathname = window.location.pathname;
  return (
    <div>
      <div className="navbar bg-base-300">
        <div className="flex-1">
          
          <a className="btn btn-ghost normal-case text-xl font-albertus">PALAISADAAN</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li><a>Services</a></li>
            <li><a>About Us</a></li>
          </ul>
        </div>
      </div>

      <div className="hero min-h-screen" style={{ backgroundImage: 'url("https://plus.unsplash.com/premium_photo-1682500052516-03b0b40f0a19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80")', position: 'sticky' }} >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
            <img src='https://palaisdaandebusaon.my.canva.site/about-us/images/9a8d465fb29e5d715586d6e725d7dd75.svg' style={{transform: 'rotate(180deg)'}}/>
              <h2 className="mb-5 text-6xl font-bold font-albertus">PALAISDAAN</h2>
              <h1 className="mb-5 text-7xl font-bold font-cursive">de Busaon</h1>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
    </div>

  )
}

export default Header