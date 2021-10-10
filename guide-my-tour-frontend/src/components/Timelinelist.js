import { Button } from "@mui/material";
import React from "react";
import "../index.css";
import Post from "./Post";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import {CheckCircleOutlineRoundedIcon} from '@mui/icons-material/CheckCircleOutlineRounded';
// import {CheckCircleRoundedIcon} from '@mui/icons-material/CheckCircleRounded';

class Timelinelist extends React.Component{
    // constructor()
    // {
    // super();
    // this.State={
    //     isclicked: false,
    //     icon:{CheckCircleOutlineRoundedIcon},
    // }
    // }
   render(){
       const {placeName,influencerName,location,description}=this.props.data
       return(
           <Router>
                {/* <button onclick={(()=>{icon: {CheckCircleRoundedIcon}})}></button> */}
    <div className="Timelinelist-Item">
    <Switch>
        <div className="Timelinelist-Item-Content">
            <span className="place">
                {placeName}
            </span>     
            {/* <span>{influencerName}</span> */}
            <span>{location}</span>
            {/* <time>time</time> */}
            <p>{description}</p>
                  <Link to="/Post">
             <Button>Upload data</Button>
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
