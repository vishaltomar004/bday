import React from "react";
import reviews from "./data";
import Testimonial from "./Components/Testimonial";
import { BrowserRouter,Route,Routes,Router } from 'react-router-dom';
import Suprise from './Components/Suprise';
const App = () => {
  return (
    <div className="flex flex-col w-[100vw] h-[100vh] justify-center items-center bg-gray-200">
      <div className="text-center">
        <h1 className="text-4xl font-bold"> कुछ महत्वपूर्ण लोग</h1>
        <div className="bg-violet-400 h-[4px] w-1/2 mt-1 mx-auto"></div>
      </div> 

      <Testimonial reviews={reviews} />
      {/* <Routes>
          
        <Route path='suprise' element = {<Suprise/>} />
       </Routes> */}
        
   
    </div>
  )
};

export default App;
