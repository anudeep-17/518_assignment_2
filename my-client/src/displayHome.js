import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';

export default function DisplayHome(name , Description) {
  return (
    <div>
        <h1 class= "display-1">{name}</h1>
        <p>
            {Description}
        </p>
    </div>
  )
}
