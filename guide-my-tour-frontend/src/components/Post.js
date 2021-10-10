import React, { Component } from 'react';
import axios from '../axios';

export default class Post extends Component {

    constructor(props) {
        super(props)

        this.onChangePlaceName = this.onChangePlaceName.bind(this);
        this.onChangeInfluencerName = this.onChangeInfluencerName.bind(this);
        this.onChangeLocation = this.onChangeLocation.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeImageUrl = this.onChangeImageUrl.bind(this);
        
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            placeName: '',
            influencerName: '',
            location:'',
            description:'',
            imgUrl:''
        }
    }

    onChangePlaceName(e) {
        this.setState({ placeName: e.target.value })
    }

    onChangeInfluencerName(e) {
        this.setState({ influencerName: e.target.value })
    }
    onChangeLocation(e) {
      this.setState({ location: e.target.value })
  }
  onChangeDescription(e) {
    this.setState({ description: e.target.value })
}
onChangeImageUrl(e) {
  this.setState({ imgUrl: e.target.value })
}

    onSubmit(e) {
        e.preventDefault()

        const userObject = {
            placeName: this.state.placeName,
            influencerName: this.state.influencerName,
            location: this.state.location,
            description: this.state.description,
            imgUrl: this.state.imgUrl
        };

        axios.post('/trips', userObject)
            .then((res) => {
                console.log(res.data)
            }).catch((error) => {
                console.log(error)
            });

        this.setState({ placeName: '',imgUrl:'', influencerName: '',location: '',description:'' })
    }


    render() {
        return (
            <div className="wrapper">
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Add Place Name</label>
                        <input type="text" value={this.state.placeName} onChange={this.onChangePlaceName} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Add Influencer Name</label>
                        <input type="text" value={this.state.influencerName} onChange={this.onChangeInfluencerName} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Add Location</label>
                        <input type="text" value={this.state.location} onChange={this.onChangeLocation} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Add Description</label>
                        <input type="text" value={this.state.description} onChange={this.onChangeDescription} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Add Image Url</label>
                        <input type="link" value={this.state.imgUrl} onChange={this.onChangeImageUrl} className="form-control" />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create User" className="btn btn-success btn-block" />
                    </div>
                </form>
            </div>
        )
    }
}