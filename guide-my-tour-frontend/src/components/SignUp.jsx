import React, { useState } from 'react'
import "../index.css"
import Home from './Home';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const SignUp = () => {
    const [signUp, setsignUp] = useState({
        username: "",
        email: "",
        password: ""
    });

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
    }

    return (
        <>
      <Router>
        <h1 style={{textAlign:"center"}}> Guide My Tour </h1>
        <div className="box center1">
            <div style={{textAlign:"center", fontSize:"20px"}}>
                <form action="" onSubmit={handleSubmit}>
                    {/* <div style={{padding:"5px", display:"flex", flexDirection:"column"}}> */}
                    <div>
                        {/* <label htmlFor="username" style={{marginBottom:"5px"}}> Full Name </label> */}
                        <input type="text" autoComplete="off"
                        value={signUp.username}
                        onChange={handleChange }
                        name="username" id="username" placeholder="User Name" className="resize"/>
                    </div>
                    <div >
                        {/* <label htmlFor="email" style={{marginBottom:"5px"}}> Email Id </label> */}
                        <input type="email" autoComplete="off"
                        value={signUp.email}
                        onChange={handleChange }
                        name="email" id="email"  placeholder="Email" className="resize"/>
                    </div>
                    <div >
                        {/* <label htmlFor="password" style={{marginBottom:"5px"}}> Password </label> */}
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
                   <Switch>
                       <Route exact path="/Home">
                           <Home/>
                           </Route>
                           </Switch>
                    <button style={{margin:"5px", backgroundColor:"orange"}} className="button1" >Sign In</button>
                   
                </form>
            </div>
        </div>
        </Router>
        </>
    )
}

export default SignUp