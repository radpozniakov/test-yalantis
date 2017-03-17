import React from 'react';
import update from 'react-addons-update';
import {updateCard, publishCard} from 'API';


const ImageEdit = React.createClass({

  getInitialState() {
    return {
      cardData:{
        id: this.props.id,
        title: this.props.title,
        url: this.props.url,
        tooltip: this.props.tooltip ? this.props.tooltip : '',
        description: this.props.description ? this.props.description : 'Краткое описание карточки',
        didUpdate: false,
        freshPublish: this.props.freshPublish ? true: false
      },
      showtooltip: false
    };
  },

  componentWillMount(){
    let draft = this.getDraft(this.state.cardData.id);
    if(draft){
      draft = JSON.parse(draft);
      this.setState({
        cardData: {
          id: draft.id,
          title: draft.title,
          url: draft.url,
          tooltip: draft.tooltip,
          description: draft.description,
          didUpdate: true,
          freshPublish: this.props.freshPublish ? true: false
        }
      });
    }
  },

  // = Работа с загруженными ЧЕРНОВИКами В LOCALSTORAGE

  uploadDrafts(el){
    let arrDrafts = this.getUploadedDrafts();
    arrDrafts.push(el);
    //получаем данные карточки для загрузки в localstorage
    //получаем массив загруженых черновиков из сторадже
    let newDraft =  JSON.stringify(arrDrafts);
    localStorage.setItem('uploadDrafts', newDraft);
    //парсим массив черновиков добавляем к нему новый драфт
    //приводим к строке и запуливаем обратно в сторадже
  },


  getUploadedDrafts(){
    //получаем массив загруженных черновиков парсим это дело и возращаем массивом
     let arrDrafts =  JSON.parse(localStorage.getItem('uploadDrafts'));
     if(!arrDrafts){
       localStorage.setItem('uploadDrafts', '[]');
       return [];
     }
     return arrDrafts;
  },



  deleteUploadedDrafts(el){
    let arrDrafts = this.getUploadedDrafts();
    let newListDrafts = arrDrafts.filter((draft) =>{
      return el.id !== draft.id;
    });
    localStorage.setItem('uploadDrafts', JSON.stringify(newListDrafts));
  },

// =  конец Работа с загруженными ЧЕРНОВИКами В LOCALSTORAGE

  handleTextarea(el){
    this.setState({
      cardData: update(this.state.cardData, {description: {$set: el.target.value},didUpdate:{$set: true}})
    });
  },

  handleTitle(el){
    this.setState({
      cardData: update(this.state.cardData, {title: {$set: el.target.value}, didUpdate:{$set: true}})
    });
  },

  handleTooltipText(el) {
    this.setState({
      cardData: update(this.state.cardData, {tooltip: {$set: el.target.value}, didUpdate:{$set: true}})
    });
  },

  saveDraft(e) {
    localStorage.setItem([e.id], JSON.stringify(e));
  },

  getDraft(el) {
   return localStorage[el];
  },

  removeDraft(el){
    localStorage.removeItem(el);
  },

  publishButton(e) {
    this.deleteUploadedDrafts(e);
    this.removeDraft(e.id);
    let publishData = {
      title: e.title,
      url: e.url,
      tooltip: e.tooltip,
      id: e.id,
      description: e.description
    };
    publishCard(publishData).then(() => {
      this.setState({
        cardData: update(this.state.cardData, {freshPublish: {$set: false}, didUpdate: {$set: false}})
      });
    });
  },

  updateButton(e){
    this.removeDraft(e.id);
    this.deleteUploadedDrafts(e);
    let updateData = {
      title: e.title,
      url: e.url,
      id: e.id,
      tooltip: e.tooltip,
      description: e.description
    };

    updateCard(updateData).then(() => {
       this.setState({
         cardData: update(this.state.cardData, {didUpdate: {$set: false}})
       });
    });
  },

  toolTipButton() {
    this.setState({
      showtooltip: !this.state.showtooltip
    });
  },

  deleteButton(e) {
    this.removeDraft(e.id);
    this.deleteUploadedDrafts(e);
    if(e.freshPublish){
      this.props.deleteDraft(e);
    }else{
      this.props.deleteСard(e);
    }
  },

  render() {
    return(
      <div className="card">
        <div className="card-image car-relative">
          <img src={this.state.cardData.url}/>

          <div className={this.state.showtooltip ? "tooltip-edit-block tooltip-edit-block-active" : "tooltip-edit-block"}>
            <textarea
              value={this.state.cardData.tooltip}
              onChange={this.handleTooltipText}
              onBlur={this.saveDraft.bind(null, this.state.cardData)}
              className="tooltip-textarea">
            </textarea>
          </div>
        </div>

        <div onClick={this.toolTipButton} className={this.state.cardData.tooltip ? "edit-tooltip tooltipNotEmpty" : "edit-tooltip"}>?</div>

        <div className="card-content edit-content">
          <div className="input-group">
            <input
              onChange={this.handleTitle}
              value={this.state.cardData.title}
              onBlur={this.saveDraft.bind(null, this.state.cardData)}
              className="title"
              type="text"/>
          </div>

          <div className="input-group">
            <textarea
              onChange={this.handleTextarea}
              className="description"
              onBlur={this.saveDraft.bind(null, this.state.cardData)}
              value={this.state.cardData.description}>
            </textarea>
          </div>

        </div>
        <div className="menage-card">

          <button
            onClick={this.publishButton.bind(null, this.state.cardData)}
            className={this.state.cardData.freshPublish !== true ? 'hidden': 'publish btn'}>
            Publish
          </button>

          <button
            onClick={this.updateButton.bind(null, this.state.cardData)}
            className={this.state.cardData.didUpdate && this.state.cardData.freshPublish == false ? 'apply btn': 'hidden'}>
            Update
          </button>

          <button
            onClick={this.deleteButton.bind(null, this.state.cardData)}
            className="delete btn">
            Delete
          </button>
        </div>
      </div>
    )
  }
});

export default ImageEdit;