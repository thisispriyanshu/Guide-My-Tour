import './App.css';
import Navbar from './components/Navbar';
import Card from './components/Card';
import React from 'react';

class App extends React.Component {
  constructor(){
    super();
    this.state={
      cards:[
        {
          id:1,
          placeName : "Delhi",
          imgUrl:"https://www.mistay.in/travel-blog/content/images/2020/07/travel-4813658_1920.jpg",
          influencerName : "Priyanshu",
          location : "Delhi,India",
          description : "This",
      },
      {
       id:2,
       placeName : "Mumbai",
       imgUrl : "",
       influencerName : "Ekanshi",
       location : "Maharastra,India",
       description : "This", 
      }
]
    }
  }
  render(){
    const {cards}=this.state
  return (
    <div className="App">
      <Navbar/>
      <Card cards={cards}/>
    </div>
  );
}
}

export default App;
