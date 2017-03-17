import React from 'react';
import request from 'superagent';
import {getImages, deleteCard, updateCard} from 'API';
//Components
import ImageUpload from 'ImageUpload';
import CardEdit from 'CardEdit';


const uploadPreset = 'v7icrjxu';
const url = 'https://api.cloudinary.com/v1_1/dtxyaujhl/image/upload';



const AdminPage = React.createClass({

  getInitialState() {
    return { cards: []};
  },

  componentWillMount(){
    this.updateCardsList();
  },

  updateCardsList() {
    let that = this;

    getImages().then(res => {
      let sortImages = res.data.reverse();
      let arrDrafts =  JSON.parse(localStorage.getItem('uploadDrafts'));

      if(arrDrafts){
        let cardList = arrDrafts.concat(sortImages);
        that.setState({
          cards: cardList
        });
      }else{
        that.setState({
          cards: sortImages
        })
      }
    })
  },



  deleteСard(card) {
    deleteCard(card.id).then(() => {
      let newListCards = this.state.cards.filter(function(CardItem) {
        return card.id !== CardItem.id;
      });
      this.setState({cards: newListCards});
    });
  },

  uploadDrafts(el){
    let arrDrafts = this.getUploadedDrafts();
    arrDrafts.push(el);

    let newDraft =  JSON.stringify(arrDrafts);
    localStorage.setItem('uploadDrafts', newDraft);
  },


  getUploadedDrafts(){
    let arrDrafts =  JSON.parse(localStorage.getItem('uploadDrafts'));
    if(!arrDrafts){
      localStorage.setItem('uploadDrafts', '[]');
      return [];
    }
    return arrDrafts;
  },

  deleteDrafts(card) {
    let newListCards = this.state.cards.filter(function(CardItem) {
      return card.id !== CardItem.id;
    });
    this.setState({cards: newListCards});
  },

  handleImageUpload(file) {

    file.map(el => {

      let upload = request.post(url)
        .field('upload_preset', uploadPreset)
        .field('file', el);

      upload.end((err, response) => {
        if (err) {
          cconsole.error(err);
        }

        if (response.body.secure_url !== '') {

          let resUpload = {
            id: response.body.public_id,
            date: response.body.created_at,
            url: response.body.url,
            title: response.body.original_filename,
            freshPublish: true
          };

          this.uploadDrafts(resUpload);
          let newCards = this.state.cards.slice();
          newCards.unshift(resUpload);
          this.setState({
            cards: newCards
          });
        }
      });
    });
  },





  render: function () {
    return(
      <div className="container-fluid">
        <h2 className="title-page">Upload image cards</h2>

        <ImageUpload Upload={this.handleImageUpload}/>

        <div className="card-edit-grids">
          {this.state.cards.lenght < 1 ? null: this.state.cards.map((el) => {
              return(
                <CardEdit
                  key={el.id}
                  id={el.id}
                  url={el.url}
                  tooltip={el.tooltip}
                  freshPublish={el.freshPublish}
                  deleteСard={this.deleteСard.bind(null, el)}
                  deleteDraft={this.deleteDrafts.bind(null, el)}
                  applyCard={this.applyCardItem}
                  title={el.title}
                  description={el.description}/>
              )
            })}
        </div>

      </div>

    )
  }
});

export default AdminPage;