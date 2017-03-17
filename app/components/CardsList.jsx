import React from 'react';
import CardItem from 'CardItem';
import {getImages} from 'API';

const ImagesList = React.createClass({

  getInitialState() {
    return {
      cards: []
    };
  },

  componentWillMount(){
    this.updateImage();
  },

  updateImage() {
    let that = this;
    getImages().then(res => {
      let sortCards = res.data.reverse();
      that.setState({
        cards: sortCards
      })
    })
  },

  render() {
    return(
      <div>
        <h2 className="title-page">Uploaded image cards</h2>
        <div className="card-grids">

          {this.state.cards.map((el, index) => {
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