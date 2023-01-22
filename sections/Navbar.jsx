import React from 'react'

export const Navbar = () => {
    return (
        <nav className='app-navbar'>
            <ul>
                <li>
                    <a href="#about"><span>About</span></a>    
                </li>
                <li>
                    <a href="#whatwedo"><span>What we do</span></a>
                </li>
                <li>
                    <a href="#howwedo"><span>How we do it</span></a>
                </li>
                <li>
                    <a href="#contact"><span>Contact</span></a>
                </li> 
            </ul>
        </nav>
    )
}