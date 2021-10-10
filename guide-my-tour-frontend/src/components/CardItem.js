import React from 'react'
import '../index.css'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Timeline from './Timeline';


class CardItem extends React.Component {
    render(){
    console.log(this.props)
        const {placeName,imgUrl,influencerName,location,description}=this.props.card;
    return ( 
               <Router>
                <div className="card-item">
                    <img src = {imgUrl} alt="mypic" className="card__img" />
                    <div className= "card__info">
                        {/* <span className="card__category"> Title </span> */}
                        <h3 className="card__title"> {placeName} </h3>
                        <h3 className="card__title"> {influencerName} </h3>
                        <span className="card__location">{location}</span>
                        <p className="card__info">{description}</p>
                    </div>
                   <Switch>
                    <Link to="/Timeline">
                    <button>Show Timeline</button>
                </Link>
                </Switch>
                </div>
                <Route exact path="/Timeline">
                     <Timeline datas={this.props}/>
                </Route>
                </Router>
    )}
}

export default CardItem;