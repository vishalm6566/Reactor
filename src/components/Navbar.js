import React from 'react'
import './style.css'
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <div className='navbar1'>                
                <NavLink to='/'>Roadmap</NavLink>
                <NavLink to='/reactverse'>Reactorverse</NavLink>
            </div>
        </>
    )
}

export default Navbar
