import './App.css';
import Navbar from './components/Navbar';
import Card from './components/Card';
import React,{useState,useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SignUp from './components/SignUp';
import Timeline from './components/Timeline';
// import Track  from './Track';
import firebase from "firebase";
import axios from './axios'


function App(){
  // constructor(){
  //   super();
  //   this.state={
  //     cards:[
  //       {
  //         id:1,
  //         placeName : "Delhi",
  //         imgUrl:"https://www.mistay.in/travel-blog/content/images/2020/07/travel-4813658_1920.jpg",
  //         influencerName : "Priyanshu",
  //         location : "Delhi,India",
  //         description : "This",
  //     },
  //     {
  //       id:2,
  //       placeName : "Mumbai",
  //       imgUrl : "https://www.telegraph.co.uk/content/dam/Travel/Destinations/Asia/India/Mumbai/gateway-of-india-mumbai-xlarge.jpg?imwidth=1200",
  //       influencerName : "Ekanshi",
  //       location : "Maharastra,India",
  //       description : "This", 
  //     }
  //   ]
  //   }
  // }
  // render(){
    // const {cards}=this.state
    const[cards,UseCard]=useState([]);
    useEffect(()=>{
      async function fetchData(){
        const req =await axios.get('/trip');
        console.log(req.data)
        UseCard(req.data);
      }
    fetchData();
  },[])
    return (
      <Router>
        <switch>
          <Route exact path="/">
            <div className="App">
              <SignUp/>
            </div>
          </Route>

          <Route path="/home">
            <div className= "App">
              <Navbar datas={cards} />
            </div>
          </Route>
        </switch>
      </Router>
    );
  }
// }

export default App;