//importing react components
import React from 'react'
import Navbar from './Navbar'
import Rainbow from './hoc/Rainbow'

//JSX DOM
const About = () => {
    return (
       <div className="container">
       <h4 className="center">About</h4>
       <p>lorem ipsum</p>
       </div>
       )
}

//random coloring for text to DOM (possibly delete)
export default Rainbow(About)