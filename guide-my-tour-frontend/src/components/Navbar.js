import React from 'react';
import "../index.css"
import Icon from '@mui/material/Icon';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import LocationDisabledIcon from '@mui/icons-material/LocationDisabled';
import AddBoxIcon from '@mui/icons-material/AddBox';
import SignUp from './SignUp';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Post from './Post';
import Timeline from './Timeline';

function Navbar(props) {
    const {datas}=props
    return (
        <Router>
        <div className="navbar">
            <img src="/public/icons8-tour-guide-64.png" className="logo-img"/>
            {/* <a href="/" className="navbar-link">Home</a> */}
            {/* <a href="" className="navbar-link">Places</a> */}
            {/* <a href=""className="navbar-link">Influencers</a> */}
            <Switch>
            <div className="navbar-center">
                <div className="navbar-button-1">
                <MyLocationIcon/>
            <span href="" className="navbar-button-text">Track my device</span>
            </div>
            <div className="navbar-center">
                <Link to="/Timeline">
                <div className="navbar-button-2">
                <AddBoxIcon/>
            <span href="" className="navbar-button-text">Post Timeline</span>
            </div>
            </Link>
            <Route exact path="/Timeline">
                <Timeline datas={datas}/>
                </Route>
            {/* <button href={SignUp}className="navbar-button-login">LogIn</button> */}
            <div>
                 <Link to="/SignUp">Log In</Link>
                </div>
                    <Route exact path="/SignUp">
                        <SignUp/>
                    </Route>
        </div>
        </div>
        </Switch>
        </div>
        </Router>
    );
}

export default Navbar;