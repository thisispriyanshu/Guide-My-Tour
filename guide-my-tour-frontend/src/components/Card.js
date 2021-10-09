import React from 'react'
import '../index.css'
import CardItem from "./CardItem"

const Card = (props)=>  {
    const {cards}=props
    console.log(cards);
    return (
                <div className="card">
                    {cards.map((card)=>{
                    return <CardItem 
                    card={card}
                    key={card.id}
                    />
                    // <img src = {} alt="mypic" className="card__img" />
                    // <div className= "card__info">
                    //     <h3 className="card__title"> Delhi </h3>
                    //     <h3 className="card__title"> Influencer </h3>
                    //     <a href = {props.link} >
                    //         <button className="button1"> Explore </button>
                    //     </a>
                    // </div>
                    })}
                </div>
    )
                }


export default Card;