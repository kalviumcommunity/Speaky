import React from 'react'
import Navbar from './Navbar'
import image from '../Images/background.jpg'

const ResultPage = ({string,str2}) => {
  let words1=string.toLowerCase().replace(/[.,?!]/g, "").split(" ")
  let words2=str2.toLowerCase().split(" ")
  let obj1={}
  let obj2={}

  words1.forEach(function(words1, index1)
  {
      if (words1.trim() !== '')
      {
       if (!words1.includes(','))
       {
           obj1[words1] = index1
       }
       else 
       {
        obj1[words1.replace(/[.,?!]/g,'')] = index1
       }
    }
   })

  words2.forEach(function(words2, index2)
  {
   obj2[words2] = index2
  })
  
  let numMatchingWords = 0
  let numTotalWords = 0

  console.log("Object 1 ", obj1)
  console.log("Object 2 ", obj2)

  for(let i in obj1)
  {
   if(obj2.hasOwnProperty(i) && obj1[i] === obj2[i])
   {
     numMatchingWords++
   }
   numTotalWords++
  }
   const accuracy = (numMatchingWords / numTotalWords) * 100
    console.log("Matching Words", numMatchingWords)
    console.log("Total Words", numTotalWords)
    const percentage = accuracy.toFixed(2)
    console.log(percentage)

  return (
    <>
      <Navbar/>
      <img src={image} alt="background" />
      <div className='result-page-container'>
        <p id='main-tagline'>Here are your results</p>
        <p id='final-statement'>You were {percentage}% accurate</p>
      </div>
      <div className='result-textbox'>
        <div className='result-textbox-1'>
          <p>{string}</p>
        </div>
        <div className='result-textbox-2'>
          <p>{str2}</p>
        </div>
      </div>
    </>
  )
}

export default ResultPage