import React from "react"; 
import Timelinelist from "./Timelinelist";
import "../index.css";
    
  const Timeline=(props)=> {
      const {datas} = props
    //   console.log(datas)
    return(
    <div className="Timeline">
    
    return <Timelinelist 
    data={datas}/>
  
    <button>submit</button>
   </div>
    )
    }
export default Timeline;

