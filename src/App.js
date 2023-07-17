import React from 'react';
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from './Components/Navbar';
import { Route, Routes } from 'react-router-dom';
import CaseStudyOne from './Components/CaseStudyOne';
import CaseStudyTwo from './Components/CaseStudyTwo';
import CaseStudyThree from './Components/CaseStudyThree';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/' element={<Navbar/>}/>
      <Route path='/casestudy' element={<CaseStudyOne/>}/>
      <Route path='/casestudy1' element={<CaseStudyOne/>}/>
      <Route path='/casestudy2' element={<CaseStudyTwo/>}/>
      <Route path='/casestudy3' element={<CaseStudyThree/>}/>
    </Routes>
    </div>
  );
}

export default App;
