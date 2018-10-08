import React from 'react'

const Navbar = () => {
    return (
        <nav className= "nav-wrapper red darken-3">
            <div className="container">
            <a href= "" className="brand-logo">PokeTimes</a>
            <ul className="right">
                <li><a href="/Home"></a>Home</li>
                <li><a href="/About"></a>About</li>
                <li><a href="/Contact"></a>Contact</li>
            </ul>
            </div>
        </nav>
        
        )
}
export default Navbar