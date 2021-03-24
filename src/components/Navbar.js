import React,{useState} from 'react'

function Navbar() {
    return (
        <div>
           <nav className="navbar"></nav>
            <div className="navbar-container">
                <Link to='/' className='navbar-logo'></Link>
            </div>
        </div>
    ) 
}

export default Navbar
