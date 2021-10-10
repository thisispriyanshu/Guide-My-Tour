import React, { useState, useEffect } from 'react'
import "../index.css"
import Home from './Home';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from './Navbar';

const SignUp = () => {
    const [signUp, setsignUp] = useState({
        username: "",
        email: "",
        password: ""
    });

    const [flag, setFlag] = useState(false);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setsignUp({...signUp, [name]:value});
    }

    const [records, setRecords] = useState([]);

    const handleSubmit = (event) => {
        event.preventDefault();

        const newRecord = {...signUp, id : new Date().getTime().toString() }

        setRecords([...records, newRecord]);

        setsignUp({username:"", email:"", password:""});
        setFlag(!flag);
    }

    const renderSignUp = () => {
        return (
            <>
                <h1 style={{textAlign:"center"}}> Guide My Tour </h1>
                <div className="box center1">
                    <div style={{textAlign:"center", fontSize:"20px"}}>
                        <form action="" onSubmit={handleSubmit}>
                            <div>
                                <input type="text" autoComplete="off"
                                value={signUp.username}
                                onChange={handleChange }
                                name="username" id="username" placeholder="User Name" className="resize"/>
                            </div>
                            <div >
                                <input type="email" autoComplete="off"
                                value={signUp.email}
                                onChange={handleChange }
                                name="email" id="email"  placeholder="Email" className="resize"/>
                            </div>
                            <div >
                                <input type="password" autoComplete="off" 
                                value={signUp.password}
                                onChange={handleChange }
                                name="password" id="password" placeholder="Password" className="resize"/>
                            </div>
                            <div>
                                <Link to="/Home"> 
                                    <button style={{margin:"5px"}} className="button1" type="submit">Sign Up</button>
                                </Link>
                            </div>
                            {/* <button style={{margin:"5px", backgroundColor:"orange"}} className="button1" >Sign In</button> */}
                        </form>
                    </div>
                </div>
            </>
        );
    }

    const renderHome = () => {
        const cards = [
            {
              id:1,
              placeName : "Delhi",
              imgUrl:"https://www.mistay.in/travel-blog/content/images/2020/07/travel-4813658_1920.jpg",
              influencerName : "Priyanshu",
              location : "Delhi,India",
              description : "This",
          }];
        return (
            <Navbar datas={cards}/>
        );
    }

    return (
        <>
        {!flag && renderSignUp()}
        {flag && renderHome()}
        </>
    );
}

export default SignUp