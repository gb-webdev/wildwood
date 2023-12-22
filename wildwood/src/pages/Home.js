import React from 'react'
import './Home.css'

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
          <div></div>
      </div>
    )
}

export default Home