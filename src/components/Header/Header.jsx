import React from 'react'
import Hero from '../Hero/Hero'

// import the navbar 
import Navbar from '../Navbar/Navbar'

const Header = () => {
    return (
        <React.Fragment>
           <Navbar/>
           <Hero/>
        </React.Fragment>
    )
}

export default Header
