import React from 'react'
import ReactDOM from "react-dom/client";
import { useLocation, BrowserRouter, Routes, Route } from "react-router-dom";
import Index from './start';
import DisplayHome from './displayHome';
import Nav from './nav';
import Start from './start';
import {Add} from './add';
import  APINews  from './APINews';

export default function App() {
  // const location = useLocation();
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element = {<Nav/>}/>
    <Route index element={<Start/>} />
    <Route path="/add" element = {<Add/>}/>
    <Route path="/News" element = {<APINews/>}/>
   </Routes>
   
   </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);