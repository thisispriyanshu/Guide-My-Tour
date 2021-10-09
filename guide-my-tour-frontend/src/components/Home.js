import React from 'react';

class Home extends React.Component {
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
               imgUrl : "https://www.telegraph.co.uk/content/dam/Travel/Destinations/Asia/India/Mumbai/gateway-of-india-mumbai-xlarge.jpg?imwidth=1200",
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
        <div>
      <Card cards={cards}/>
      <h1>hello world</h1>
        </div>
    );
}
}

export default Home;