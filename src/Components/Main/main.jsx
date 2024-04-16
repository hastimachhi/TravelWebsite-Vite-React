import React, {useEffect} from "react";
import "./main.css";
import "./main.scss";
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { HiOutlineClipboardCheck } from 'react-icons/hi'

import img from '../../Data/borabora.jpg'
import img2 from '../../Data/machupicchu.jpg'
import img3 from '../../Data/greatbarrierreef.jpg'
import img4 from '../../Data/cappadocia.jpg'
import img5 from '../../Data/gunajuato.jpg'
import img6 from '../../Data/cinqueterre.jpg'
import img7 from '../../Data/angkorwat.jpg'
import img8 from '../../Data/tajmahal.jpg'
import img9 from '../../Data/bali.jpg'

import Aos, { init } from 'aos'
import 'aos/dist/aos.css'

const Data = [
  {
    id: 1,
    imgSrc: img,
    destTitle: "Bora Bora",
    location: "New Zealand",
    grade: "CULTURAL RELAX",
    fees: "$700",
    description:
      "The epitome of romance, Bora Bora is one of the best travel destinations in the world. This place is know for its luxurious stays and adventurous activities."
  },

  {
    id: 2,
    imgSrc: img2,
    destTitle: "Machu Picchu",
    location: "Peru",
    grade: "CULTURAL RELAX",
    fees: "$600",
    description:
    "Huayna Picchu is a mountain in Peru, rising over Machu Pichhu, the so-called Lost City of Incas. This place is popular among tourists as the sunrise from the Sun Gate is simply spectacular."
  },
  
  {
    id: 3,
    imgSrc: img3,
    destTitle: "Great Barrier Reef",
    location: "Australia",
    grade: "CULTURAL RELAX",
    fees: "$700",
    description:
      "One of the most remarkable Australian natural gifts is the Great Barrier Reef. The hallmark of this place is 'lavish' and 'beauty'.ALways interesting to be in this place.",
  },

  {
    id: 4,
    imgSrc: img4,
    destTitle: "Cappadocia",
    location: "Turkey",
    grade: "CULTURAL RELAX",
    fees: "$800",
    description:
      "According to the World Tourism Ranking, 45 Million people visit Turkey each year, and from that about 2 Million come to visit Cappadocia. This place is known for its luxurious stays and adventurous activities.",
  },

  {
    id: 5,
    imgSrc: img5,
    destTitle: "Gunajuato",
    location: "Mexico",
    grade: "CULTURAL RELAX",
    fees: "$1100",
    description:
      "A city in centrl Mexico, Gunajuato is known for its history of silver mining and colonial architecture. The houses in the city are very attractively painted with the most bright colours available. Always welcome.",
  },

  {
    id: 6,
    imgSrc: img6,
    destTitle: "Cinque Terre",
    location: "Italy",
    grade: "CULTURAL RELAX",
    fees: "$840",
    description:
      "The vibrant hues of the houses are its benchmark and explain the beauty of this place. Also, if you are a foodie and love seafood, you will be exhilarated with the choice you are about to get here. Happy exploring great food!",
  },

  {
    id: 7,
    imgSrc: img7,
    destTitle: "Angkor Wat",
    location: "Cambodia",
    grade: "CULTURAL RELAX",
    fees: "$790",
    description:
      "Angkor Wat represents the entire range of khmer art from the 9th to the 15th century. This temple is considered the heart and soul of cambodia. This place is known for its luxurious stays and adventorous activities.",
  },

  {
    id: 8,
    imgSrc: img8,
    destTitle: "Taj Mahal",
    location: "India",
    grade: "CULTURAL RELAX",
    fees: "$900",
    description:
      "An immense mausolwum of white marble, built-in Agra by Mughal emperor Shah Jahan in memory of his wife Mumtaz, the monument is breathakingly beautiful. This place is known for its luxurious stays and adventurous activities.",
  },

  {
    id: 9,
    imgSrc: img9,
    destTitle: "Bali Island",
    location: "Indonesia",
    grade: "CULTURAL RELAX",
    fees: "$500",
    description:
    "Bali is an Indonesia Island and one of the best holiday destinations in the Indonesia archipelago. Bali is known for its volcanic mountains, history, art & culture, food, temples and beautiful sandy beaches.",
  },

]

const Main = () => {

  useEffect(() =>{
    Aos.init({duration: 2000})
  }, [])

  return (
    <section className="main container section">
      <div className="sectionTitle">
        <h3 data-aos='fade-right' className="title">Most Visited Destinations</h3>
      </div>

      <div className="sectionContent grid">
        {
          Data.map((data) => {
            return(
              <div key={data.id} data-aos='fade-up' className="singleDestination">

                <div className="imageDiv">
                  <img src={data.imgSrc} alt={data.destTitle} />
                </div>

                <div className="cardInfo">
                  <h4 className="destTitle">{data.destTitle}</h4>
                  <span className="continent flex">
                    <HiOutlineLocationMarker className="icon"/>
                    <span className="location">{data.location}</span>
                  </span>

                  <div className="fees flex">
                    <div className="grade">
                      <span>{data.grade} <small>+1</small></span>
                    </div>
                    <div className="price">
                      <h5>{data.fees}</h5>
                    </div>
                  </div>

                  <div className="desc">
                    <p>{data.description}</p>
                  </div>

                  <button className="btn flex">
                    DETAILS <HiOutlineClipboardCheck className="icon"/>
                  </button>
                </div>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default Main;