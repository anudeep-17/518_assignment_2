import React from 'react';
import ReactDOM from 'react-dom'; 
import 'bootstrap/dist/css/bootstrap.css';
import Nav from './nav';
import Body from './body';

export default function Start() {
  //returns the start 
  return (
    <><div>
                          <Nav />
                    </div><div>
                      <Body />
                    </div></>
  )
}