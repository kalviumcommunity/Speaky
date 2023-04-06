import React from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import Navbar from './Navbar'
import image from '../Images/background.jpg'
import { Link } from 'react-router-dom'

const WorkingPage = ({str2, setstr2}) => {
  // const  {str2, setstr2}= props;
    const {transcript, listening, resetTranscript} = useSpeechRecognition()
    const str1 = "The sky stretches endlessly, displaying a spectrum of colors as the sun sets. Birds soar above, effortlessly gliding through the air. Trees sway in the gentle breeze, their leaves rustling softly. A river flows nearby, its clear water reflecting the beauty of its surroundings. The sound of laughter can be heard in the distance, reminding us of the joy that life can bring. In this moment, everything seems perfect, and we are reminded of the wonders that exist in this world."
    setstr2(`${transcript}`)

    if(!SpeechRecognition.browserSupportsSpeechRecognition()){
        return null
    }

  return (
    <div className='working-page-container'>
        <Navbar/>
        <img src={image} alt="background" />
            <p>Original Text</p>
          <div className='textbox-area'>
            <div className='textbox-1'>
            <p>{str1}</p>
            </div>
        
            <div className="textbox-2">
            <p>{str2}</p>
            </div>
        </div>

        <div className='instructions'>
          <p> {listening ? 'Recording......' : '*Hit Record and read paragraph outloud'} </p>
          <button onClick={SpeechRecognition.startListening}> Record </button>  
          <button id='reset-button' onClick={resetTranscript}> Reset </button>
          <button id='next-button'> <Link to="/resultpage">Next</Link></button>
      </div>

    </div>
  )
}

export default WorkingPage