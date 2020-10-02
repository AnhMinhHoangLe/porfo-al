import React from 'react'
import './Nav.css'
import logo from "./logo.png"

const Nav = (({ onRouteChange }) => {
        return (
                <div className='HOME-background-nav'>
                        <img onClick={() => onRouteChange("Home")} src={logo} alt="" id='HOME-background-nav-logo' />
                </div>
        )
})
export default Nav; 