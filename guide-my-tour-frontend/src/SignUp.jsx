import React, { useState } from 'react'

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
        <h1 style={{textAlign:"center", marginTop:"10%"}}> Guide My Tour </h1>
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
                        <input type="text" autoComplete="off"
                        value={signUp.email}
                        onChange={handleChange }
                        name="email" id="email"  placeholder="Email" className="resize"/>
                    </div>
                    <div >
                        {/* <label htmlFor="password" style={{marginBottom:"5px"}}> Password </label> */}
                        <input type="text" autoComplete="off" 
                        value={signUp.password}
                        onChange={handleChange }
                        name="password" id="password" placeholder="Password" className="resize"/>
                    </div>
                    <button style={{margin:"5px"}} className="button1" type="submit">Submit</button>
                    Or
                    <button style={{margin:"5px"}} className="button1" >Sign In</button>
                </form>
            </div>
        </div>
        </>
    )
}

export default SignUp