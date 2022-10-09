import React from 'react'
import ReactDOM from "react-dom/client";
import { useLocation, BrowserRouter, Routes, Route } from "react-router-dom";
import Index from './start';
import DisplayHome from './displayHome';
import Nav from './nav';
import Start from './start';

export default function App() {
  // const location = useLocation();
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element = {<Nav/>}/>
    <Route index element={<Start/>} />
    <Route path="/body" element={<DisplayHome name = {"hey hi"} Description ={"fkjakhfkjhg"}/>}/>
   </Routes>
   </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);