import './App.css';
import ResultPage from './components/ResultPage';
import HomeComponent from './components/HomeComponent';
import WorkingPage from './components/WorkingPage';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Login from './components/Login';

function App() {

  const str1 = "The sky stretches endlessly, displaying a spectrum of colors as the sun sets. Birds soar above, effortlessly gliding through the air. Trees sway in the gentle breeze, their leaves rustling softly. A river flows nearby, its clear water reflecting the beauty of its surroundings. The sound of laughter can be heard in the distance, reminding us of the joy that life can bring. In this moment, everything seems perfect, and we are reminded of the wonders that exist in this world."
  const [paragraphText, setParagraphText] = useState('')
  const [str2, setstr2] = useState("")

  const handleParagraphChange = (e) => {
    setParagraphText(e.target.value)
    console.log('first')
  }

  console.log(paragraphText)
  console.log("str2 ",str2)
  
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<HomeComponent/>}/>
            {/* <Route path="/loginpage" element={<Login/>}/> */}
            <Route path="/workingPage" element={<WorkingPage paragraphText={paragraphText} onParagraphChange={handleParagraphChange} setstr2={setstr2} str2={str2}/>}></Route>
            <Route path="/resultPage" element={<ResultPage string={str1} str2={str2}/>}></Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
