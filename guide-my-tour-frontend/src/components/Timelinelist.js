import React from "react";
import "../Index.css";

const Timelinelist=({props})=>{

    <div className="Timelinelist-Item">
        <div className="Timelinelist-Item-Content">
            <span className="place">
                {props.place}
            </span>     
            <time>{props.time}</time>
            <p>{props.time}</p>
            <p>{props.description}</p>

        </div>
    </div>
};
export default Timelinelist;
