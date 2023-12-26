import React from 'react'
import './Gallery.css'
import plane from '../assets/plane.avif'

const Gallery = () => {
  return (
    <div className='gallery-div-wrap'>
      <div className='job-1'>
        <img className='job-2' src={plane} />
      </div>
      <div className='job-1'>
      <img className='job-2' src={plane} />
      </div>
      <div className='job-1'>
      <img className='job-2' src={plane} />
      </div>
      <div className='job-1'>
      <img className='job-2' src={plane} />
      </div>
      <div className='job-1'>
      <img className='job-2' src={plane} />
      </div>
      <div className='job-1'>
      <img className='job-2' src={plane} />
      </div>
    </div>
  )
}

export default Gallery