import React from 'react'
import './Home.css'
import chisel from '../assets/chisel-img-1.png'

const Home = () => {
    return (
      <div className='home-div-wrap'>
          <div className='greeter-div'>
            <h1 className='welcome'>Welcome to Wildwood</h1>
            <h2 className='welcome-2'>Carving | Carpentry | Joinery</h2>
            <h2 className='welcome-2'>Sydney, Australia</h2>
          </div>
          <div className='home-cta'>
            <h1>Get a free estimate</h1>
            <h2>Got a project in mind?</h2>
            <h1>Contact me</h1>
            <h2>Andrew Harvey: xxx-xxx-xxxx</h2>
          </div>
          <div className='services'>
            <div className='chisel-div'>
              <img className='chisel' src={chisel}/>
            </div>
            <div>
              <h2>Services</h2>
              <h3>At Wildwood, we specialize in the meticulous restoration/repair of cherished furniture, architectural elements and almost all things wooden, breathing new life into both antique treasures and modern pieces showing signs of wear. Our expert craftsmanship ensures that your possessions not only regain their former glory but emerge even more exquisite than before. For those seeking unique and tailor-made creations, our skilled artisans can craft bespoke items to your exact specifications—explore our gallery for a glimpse of our bespoke wonders in the Gallery. With Wildwood, every piece, old or new, is treated with the utmost care and dedication, ensuring your woodwork is not just restored, but elevated to a new level of timeless beauty.</h3>
            </div>
          </div>
      </div>
    )
}

export default Home