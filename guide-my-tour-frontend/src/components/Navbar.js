import React, {useState,useEffect} from 'react';
import "../index.css"
import Icon from '@mui/material/Icon';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import LocationDisabledIcon from '@mui/icons-material/LocationDisabled';
import AddBoxIcon from '@mui/icons-material/AddBox';
import SignUp from './SignUp';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Post from './Post';
import Timeline from './Timeline';
import Card from './Card';
import Track from '../Track'
import axios from "../axios"        

const Navbar = (props) => {
    const {datas} = props;

    // const cards = [
    //     {
    //       id:1,
    //       placeName : "Delhi",
    //       imgUrl:"https://www.mistay.in/travel-blog/content/images/2020/07/travel-4813658_1920.jpg",
    //       influencerName : "Priyanshu",
    //       location : "Delhi,India",
    //       description : "This",
    //   },
    //   {
    //     id:2,
    //     placeName : "Mumbai",
    //     imgUrl : "https://www.telegraph.co.uk/content/dam/Travel/Destinations/Asia/India/Mumbai/gateway-of-india-mumbai-xlarge.jpg?imwidth=1200",
    //     influencerName : "Ekanshi",
    //     location : "Maharastra,India",
    //     description : "This", 
    //   }
    // ];
    const[cards,UseCard]=useState([]);
            useEffect(()=>{
              async function fetchData(){
                const req =await axios.get('/trip');
                console.log(req.data)
                UseCard(req.data);
              }
            fetchData();
          },[])
    const [state, setState] = useState({
        showLogin: false,
        showTimeline: false,
        showTacking: false,
        showCards: true
    });

    const handleLogin = () => {
        setState({
            showLogin: true,
            showTimeline: false,
            showTacking: false,
            showCards: false
        });
    }

    const handleTimeline = () => {
        setState({
            showLogin: false,
            showTimeline: true,
            showTacking: false,
            showCards: false
        });
    }

    const handleTrack = () => {
        setState({
            showLogin: false,
            showTimeline: false,
            showTacking: true,
            showCards: false
        });
    }

    const renderNavBar = () => {
        return (
            <div style={{display: "flex", justifyContent: "space-between", margin: "10px"}}>
                <div style={{display: "flex"}}>
                    <img src=".../public/icons8-tour-guide-64.png" className="logo-img"/>

                    <div style={{marginLeft: "10px", cursor: "pointer"}}>
                        <Link to="/SignUp">
                            {/* <button onClick={handleLogin}> Log In </button>    */}
                        </Link>
                    </div>
                </div>

                <div style={{display: "flex"}}>
                    <div onClick={handleTrack} style={{display:"flex", color:"orange", cursor: "pointer"}}>
                        <MyLocationIcon/>
                        <span href="" className="navbar-button-text">Track my device</span>
                    </div>

                    <div onClick={handleTimeline} style={{marginLeft: "10px", display:"flex", color:"blue", cursor: "pointer"}}>
                        <AddBoxIcon/>
                        <span href="" className="navbar-button-text">Post Timeline</span>
                    </div>
                </div>
            </div>
        )
    }

    const renderComponentAccordingToSelection = () => {
        return (
            <div style = {{marginTop: "20px"}}>
                {/* {state.showLogin && <Login />} */}
                {state.showTacking && <Track />}
                {state.showTimeline && <Timeline datas={cards} />}
                {state.showCards && datas.length == 0 && <h1> No Data Available </h1>}
                {state.showCards && datas.length > 0 && <Card cards = {datas} />}
            </div>
        )
    }



    return (
        <>
            {renderNavBar()}
            {renderComponentAccordingToSelection()}
        </>
    );



    
    //     <Router>
    //         <div className="navbar">
    //             <img src="" className="logo-img"/>
    //             {/* <a href="/" className="navbar-link">Home</a> */}
    //             {/* <a href="" className="navbar-link">Places</a> */}
    //             {/* <a href=""className="navbar-link">Influencers</a> */}
                
    //             <div className="navbar-center">

    //                 <div className="navbar-button-1">
    //                     <MyLocationIcon/>
    //                     <span href="" className="navbar-button-text">Track my device</span>
    //                 </div>

    //                 <div className="navbar-center">
    //                     <div>
    //                         <Link to="/Timeline">
    //                             <div className="navbar-button-2">
    //                                 <AddBoxIcon/>
    //                                 <span href="" className="navbar-button-text">Post Timeline</span>
    //                             </div>
    //                         </Link>
    //                     </div>

    //                     {/* <button href={SignUp}className="navbar-button-login">LogIn</button> */}
                        
    //                     <div>
    //                         <Link to="/SignUp">Log In</Link>
    //                     </div>

    //                     <switch>
    //                         <Route path="/Timeline">
    //                             <Timeline datas={datas}/>
    //                         </Route>
                            
    //                         <Route path="/SignUp">
    //                             <SignUp/>
    //                         </Route>
    //                     </switch> 
    //                 </div>
    //             </div>
            
    //         </div>
    //     </Router>
    // );
}

export default Navbar;