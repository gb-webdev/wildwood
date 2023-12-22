import React from 'react'
import './Footer.css'
import instrgram from '../assets/instagram.png'
import email from '../assets/email.png'

const Footer = () => {
  return (
    <div className='footer-div-wrap'>
      <div className='footer-text'>
        <h3>Copyright &copy; 2023 Wildwood carpentry and joinery | Web design by <a className='footer-link' href='https://www.linkedin.com/in/graham-blundell/'>Graham Blundell</a></h3>
      </div>
      <div className='socials-div'>
        <a href='https://www.instagram.com/wildwoodcandj?igsh=NGVhN2U2NjQ0Yg==' target='blank'><img className='instagram' src={instrgram} /></a>
        <img className='email' src={email}/>
      </div>
    </div>

  )
}

export default Footer