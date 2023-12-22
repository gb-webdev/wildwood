import React from 'react'
import { Nav, NavItem } from 'reactstrap'
import { NavLink } from 'react-router-dom'
import wildwood from '../assets/wildwood.png'
import './Header.css'

const Header = () => {
    return (
       <Nav className='header-wrap'>

            <div className='image-div'>
                <NavItem>
                    <NavLink to='/'>
                        <img className='wildwood' src={wildwood} alt='wildwood logo' />
                    </NavLink>
                </NavItem>
            </div>

                <NavItem className='nav-link'>
                    <NavLink className='nav-link' to='/gallery'>
                        <h2>Gallery</h2>
                    </NavLink>    
                </NavItem>

                <NavItem className='nav-link'>
                    <NavLink className='nav-link' to='/about'>
                        <h2>About Me</h2>
                    </NavLink>
                </NavItem>

       </Nav> 
    )
}

export default Header