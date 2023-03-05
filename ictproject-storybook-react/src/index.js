import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter, Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Sidebar from './stories/Sidebar';
import {MainScreen} from './stories/MainScreen';
import {FeedbackPage} from './stories/FeedbackPage';
import LoginPage from './stories/LoginPage';
import {AboutScreen} from './stories/AboutScreen';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Sidebar />}>
        <Route index element={<MainScreen/>} />
        <Route path='/feedback' element = {<FeedbackPage/>} />
        <Route path='/login' element = {<LoginPage/>} />  
        <Route path='/about' element = {<AboutScreen/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
