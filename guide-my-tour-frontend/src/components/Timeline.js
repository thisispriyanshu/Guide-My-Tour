import React from "react"; 
import Timelinelist from "./Timelinelist";
import "../index.css";
    
  const Timeline=(props)=> {
      const {datas} = props
    //   console.log(datas)
    return(
    <div className="Timeline">
    {datas.map((data)=>{
    return <Timelinelist 
    data={data}/>
  })}
   </div>
    )
    }
export default Timeline;

