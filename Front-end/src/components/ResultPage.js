import React from 'react'
import Navbar from './Navbar'
import image from '../Images/background.jpg'

const ResultPage = ({string}) =>{

  return (
    <>
      <Navbar/>
      <img src={image} alt="background" />
      <div className='result-page-container'>
        <p id='main-tagline'>Here are your results</p>
        <p id='final-statement'>You were 100% accurate</p>
      </div>
      <div className='result-textbox'>
        <div className='result-textbox-1'>
          <p>{string}</p>
        </div>
        <div className='result-textbox-2'>
          <p>str2</p>
        </div>
      </div>
    </>
  )
}

export default ResultPage