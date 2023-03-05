import ReactDom from 'react-dom/client';

import {BrowserRouter, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Sidebar from './stories/Sidebar';
import {MainScreen} from './stories/MainScreen';
import {FeedbackPage} from './stories/FeedbackPage';
import LoginPage from './stories/LoginPage';
import {AboutScreen} from './stories/AboutScreen';

function App() {
  return (
    <>
      <Sidebar>
        <BrowserRouter>
        <Routes>
        <Route path='/home' element = {<MainScreen/>} />
        <Route path='/feedback' element = {<FeedbackPage/>} />
        <Route path='/login' element = {<LoginPage/>} />  
        <Route path='/about' element = {<AboutScreen/>} />
         </Routes>
         </BrowserRouter>
      </Sidebar>
    
    </>
  );
}

export default App;
