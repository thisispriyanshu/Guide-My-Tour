import React from "react";
import "../index.css";

class Timelinelist extends React.Component{
   render(){
       const {placeName,influencerName,location,description}=this.props.data
       return(
    <div className="Timelinelist-Item">
        <div className="Timelinelist-Item-Content">
            <span className="place">
                {placeName}
            </span>     
            <span>{influencerName}</span>
            <span>{location}</span>
            {/* <time>{props.time}</time> */}
            {/* <p>{props.time}</p> */}
            <p>{description}</p>

        </div>
    </div>
       )
   }
};
export default Timelinelist;
