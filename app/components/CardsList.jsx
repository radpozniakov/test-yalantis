import React from 'react';
import CardItem from 'CardItem';
import {getImages} from 'API';

const ImagesList = React.createClass({

  getInitialState() {
    return {
      imageslist: []
    };
  },

  componentWillMount(){
    this.updateImage();
  },

  updateImage() {
    let that = this;
    getImages().then(res => {
      let sortImages = res.data.reverse();
      that.setState({
        imageslist: sortImages
      })
    })
  },

  render() {
    return(
      <div>
        <h2 className="title-page">Uploaded image cards</h2>
        <div className="card-grids">

          {this.state.imageslist.map((el, index) => {
            return(
              <CardItem
                key={index}
                title={el.title}
                tooltip={el.tooltip}
                url={el.url}
                description={el.description}/>
            )
          })}

        </div>
      </div>
    )
  }
});

export default ImagesList;