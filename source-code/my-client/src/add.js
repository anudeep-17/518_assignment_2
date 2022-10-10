import React from 'react';
import { useState } from "react";
import Nav from './nav';

export class Add extends React.Component{

    constructor(props)
    {
        super(props);
        this.state = 
        {
            firstnum : null,
            secondnum : null,
        };
    }

    handleChange = (event) => 
    {
        debugger;
        let number = event.target.name;
        let value = event.target.value;

        this.setState({
            [number] :value
        })
    }

    handlesubmit = (event) =>
    {
        event.preventDefault();
        const url = `http://10.113.148.92:3000/addserverrouter/${this.state.firstnum}/and/${this.state.secondnum}`
        fetch(url)
        .then((result) => result.json())
        .then(result => {
            debugger;
            this.setState({queryResult : result.Addition})
        })
    }


render()
{
  return (
    <>
    <Nav />
    <br/>

    <div>
          <div className="col">
              <form onSubmit={this.handlesubmit}>
                  <div className="form-floating">

                      <input
                          type="number"
                          name="firstnum"
                          id="firstnum"
                          className="form-control"
                        //   value={this.state.firstnum}
                          onChange={this.handleChange} />
                      <label htmlFor="firstnum">Enter first number</label>
                  </div>
                  <br />
                  <div className="form-floating">

                  <input
                          type="number"
                          name="secondnum"
                          id="secondnum"
                          className="form-control"
                        //   value={this.state.secondnum}
                          onChange={this.handleChange} />
                      <label htmlFor="secondnum">Enter second number</label>
                  </div>
                  <br />
                  <div>
                  </div>
                  <button type="submit" className="btn btn-primary">Get Addition</button>
              </form>
          </div>
        <br/>
        <h1>Result:</h1>
        <p>Your Addition Result (from server) is: {this.state.queryResult} </p>
        <p>The addition of two numbers is (*): {Number(this.state.firstnum) + Number(this.state.secondnum)}</p>

      </div></>
  )
}
}
