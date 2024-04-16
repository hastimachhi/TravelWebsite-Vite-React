import React, { useState } from 'react'
import './navbar.css'
import './navbar.scss'
import { MdModeOfTravel } from 'react-icons/md'
import { IoIosCloseCircle } from 'react-icons/io'
import { HiOutlineDotsVertical } from 'react-icons/hi'

const Navbar = () => {
    const [active , setActive] = useState('navbar')
    const showNav = () => {
        setActive('navbar activeNavbar')
    }

    const removeNav = () => {
        setActive('navbar')
    }

  return (
    <section className="navbarsection">
        <header className="header flex">
            <div className="logodiv">
                <a href="" className="logo flex">
                    <h1> <MdModeOfTravel className="icon"/> Travel.</h1>
                </a>
            </div>

            <div className={active}>
                <ul className="navlist flex">
                    <li className="navitem">
                        <a href="" className="navlink">Home</a>
                    </li>
                    <li className="navitem">
                        <a href="" className="navlink">About</a>
                    </li>
                    <li className="navitem">
                        <a href="" className="navlink">Packages</a>
                    </li>
                    <li className="navitem">
                        <a href="" className="navlink">Shop</a>
                    </li>
                    <li className="navitem">
                        <a href="" className="navlink">News</a>
                    </li>
                    <li className="navitem">
                        <a href="" className="navlink">Contact</a>
                    </li>

                    <button className='btn'>
                        <a href="">BOOK NOW</a>
                    </button>
                </ul>

                <div onClick={removeNav} className="closenavbar">
                    <IoIosCloseCircle className="icon"/>
                </div>
            </div>

            <div onClick={showNav}
            className="togglenavbar">
            <HiOutlineDotsVertical className='icon'/>
            </div>

        </header>
    </section>
  )
}

export default Navbar