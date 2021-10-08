import React from 'react'
import '../index.css'


function Card(props) {
    // console.log(props);
    return (
        <>
            <div className="cards" >
                <div className="card">
                    <img src = "" alt="mypic" className="card__img" />
                    <div className= "card__info">
                        {/* <span className="card__category"> Title </span> */}
                        <h3 className="card__title"> Delhi </h3>
                        <h3 className="card__title"> Influencer </h3>
                        <a href = {props.link} >
                            <button className="button1"> Explore </button>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;