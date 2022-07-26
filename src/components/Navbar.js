import React from 'react'
import icon from '../bnb.png'

export default function Navbar(){
    return(
        <nav>
            <img src={icon} alt='icon' className="nav--logo"/>
        </nav>
    )
}