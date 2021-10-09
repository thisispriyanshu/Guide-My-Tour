import React from 'react'
import '../index.css'


class CardItem extends React.Component {
    render(){
    console.log(this.props)
        const {placeName,imgUrl,influencerName,location,description}=this.props.card;
    return (
                <div className="card-item">
                    <img src = {imgUrl} alt="mypic" className="card__img" />
                    <div className= "card__info">
                        {/* <span className="card__category"> Title </span> */}
                        <h3 className="card__title"> {placeName} </h3>
                        <h3 className="card__title"> {influencerName} </h3>
                        <span className="card__location">{location}</span>
                        <p className="card__info">{description}</p>
                    </div>
                </div>
    )}
}

export default CardItem;