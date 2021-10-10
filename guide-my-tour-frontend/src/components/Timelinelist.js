import { Button } from "@mui/material";
import React from "react";
import "../index.css";
import Post from "./Post";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class Timelinelist extends React.Component{
   render(){
       const {placeName,influencerName,location,description}=this.props.data
       return(
           <Router>
    <div className="Timelinelist-Item">
    <Switch>
        <div className="Timelinelist-Item-Content">
            <span className="place">
                {placeName}
            </span>     
            {/* <span>{influencerName}</span> */}
            <span>{location}</span>
            <time>time</time>
            <p>{description}</p>
                  <Link to="/Post">
             <Button>Upload photo</Button>
             </Link>
             <Route exact path="/Post">
                 <Post/>
             </Route>
        </div>
    </Switch>
    </div>
    </Router>
       )
   }
};
export default Timelinelist;
