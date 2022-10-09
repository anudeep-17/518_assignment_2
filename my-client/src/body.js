import React from "react";
import { render } from "react-dom";
import { useState } from "react";

export default function Body()
{ 
    const [formvalue, setFormValue] = useState({
        name: "Sai vishnu anudeep kadiyala",
        description : "hey guys, this is sai vishnu anudeep kadiyala, one of the students of ICSI 518, from team STUDY EASY. I am a combined bachelors and master student majoring in computer science, and a motivated athelte who loves to compete.",
    });

    const handleChange = (event) => {
        const {name , value} = event.target;
        setFormValue((prevState) => {
            return {
                ...prevState,
                [name] : value,
            }
        });
    };

    const {name, description} = formvalue


    return(
    <>
    <div class="container">
            <div class="row">
                <div class="col-sm">
                    <img class="rounded float-left" src="https://www.myenglishteacher.eu/blog/wp-content/uploads/2018/01/ways-to-say-hello.jpg" width="300px" height="300px" />
                </div>
                <div class="col-sm">
                    <h1>{name}</h1>
                    <p>{description}</p>
                </div>
            </div>
        </div><div>
                <br />
                <h1> Enter information: </h1>
            </div><div className="row d-block">
                <div className="col">
                    <form>
                        <div className="form-floating">

                            <input
                                type="text"
                                name="name"
                                id="name"
                                className="form-control"
                                value={name}
                                onChange={handleChange} />
                            <label htmlFor="name" for="name">Name</label>
                        </div>
                        <br />
                        <div className="form-floating">

                            <textarea
                                type="text"
                                name="description"
                                id="description"
                                className="form-control"
                                onChange={handleChange}
                                value={description} />
                            <label htmlFor="description" for="description">Description</label>
                        </div>
                        <br />
                        <div>
                        </div>
                    </form>
                </div>
            </div></>
    );
}

