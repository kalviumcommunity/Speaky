import React from 'react'
import Navbar from './Navbar'
import image from '../Images/background.jpg'
import { Link } from 'react-router-dom'

const HomeComponent = () => {
    
  return (
    <>
       <Navbar/>
       <div className='main-content'>
            <h1><b>Speak without fear</b></h1>
            <img src={image} alt="background"/>
            <p>With Speaky you can improve your pronunciation which will overall help <br/> you develop your public speaking skills</p>
            <Link to="/workingPage"><button> Get Started</button></Link>
        </div>
    </>
  )
}

export default HomeComponent