import './App.css';
import Navbar from './components/Navbar';
import Card from './components/Card';
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SignUp from './components/SignUp';


function App() {
//   constructor(){
//     super();
//     this.state={
//       cards:[
//         {
//           id:1,
//           placeName : "Delhi",
//           imgUrl:"https://www.mistay.in/travel-blog/content/images/2020/07/travel-4813658_1920.jpg",
//           influencerName : "Priyanshu",
//           location : "Delhi,India",
//           description : "This",
//       },
//       {
//        id:2,
//        placeName : "Mumbai",
//        imgUrl : "https://www.telegraph.co.uk/content/dam/Travel/Destinations/Asia/India/Mumbai/gateway-of-india-mumbai-xlarge.jpg?imwidth=1200",
//        influencerName : "Ekanshi",
//        location : "Maharastra,India",
//        description : "This", 
//       }
// ]
//     }
//   }
  // render(){
    // const {cards}=this.state
  return (
    <div className="App">
      <SignUp/>
      {/* <Navbar/> */}
      {/* <Card cards={cards}/> */}
    </div>
  );
}
// }

export default App;
