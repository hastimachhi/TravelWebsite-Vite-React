import React, {useEffect} from 'react'
import './home.css'
import './home.scss'
import video from '../../Data/island.mp4'
import { GrLocation } from 'react-icons/gr'
import { HiFilter } from 'react-icons/hi'
import { FiFacebook } from 'react-icons/fi'
import { AiOutlineInstagram } from 'react-icons/ai'
import { FaTripadvisor } from 'react-icons/fa'
import { BsListTask } from 'react-icons/bs'
import { TbApps } from 'react-icons/tb'

import Aos, { init } from 'aos'
import 'aos/dist/aos.css' 

const Home = () => {

  useEffect(() =>{
    Aos.init({duration: 2000})
  }, [])

  return (
    <section className="home">
      <div className="overlay">

      </div>
      <video src= {video} muted autoPlay loop type = "video/mp4"></video>

      <div className="homecontent container">
        <div className="textdiv">

          <span data-aos='fade-up' className="smalltext">
            Our Packages
          </span>
          <h1 data-aos='fade-up' className="hometitle">
              Search your Holiday
          </h1>
        </div>

        <div data-aos='fade-up' className="carddiv grid">
          <div className="destinationInput">
            <label htmlFor="city">Search your destination:</label>
            <div className="input flex">
              <input type="text" placeholder='Enter your name...' />
              <GrLocation className="icon" />
            </div>
          </div>

          <div className="dateInput">
            <label htmlFor="date">Select your date::</label>
            <div className="input flex">
              <input type="date" />
            </div>
          </div>  

          <div className="priceInput">
            <div className="label-total flex">
              <label htmlFor="price">Max price:</label>
              <h3 className="total">$5000</h3>
            </div>
            <div className="input flex">
              <input type="range" max="5000" min="1000" />
            </div>
          </div>

          <div className="searchoption flex ">
            <HiFilter className="icon" />
            <span>More Filters</span>
          </div>  
        </div>

        <div data-aos='fade-up' className="homefootericons flex">
          <div className="righticons">
            <FiFacebook className='icon'/>
            <AiOutlineInstagram className='icon'/>
            <FaTripadvisor className='icon'/>
          </div>
          <div className="lefticons">
            <BsListTask className='icon'/>
            <TbApps className='icon'/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home