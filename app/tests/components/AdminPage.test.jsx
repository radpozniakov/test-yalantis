import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jQuery';
import TestUtils from 'react-addons-test-utils';

import AdminePage from 'AdminPage';

describe('AdminPage', () =>{
  it('should exist', ()=>{
    expect(AdminePage).toExist();
  });

  describe('render', ()=> {
    it('Should render correctly cards to list from state', ()=>{

      let items = [
        {
          "title": "Горы",
          "url": "http://res.cloudinary.com/dtxyaujhl/image/upload/v1489742472/rho3eescvpny60zxgklf.jpg",
          "id": "rho3eescvpny60zxgklf",
          "tooltip": "There are many variations of passages of Lorem Ipsum available",
          "description": "There are many variations of passages of Lorem Ipsum available"
        },
        {
          "title": "iPhone 7",
          "url": "http://res.cloudinary.com/dtxyaujhl/image/upload/v1489771501/vmj66ze3lattgxm3knbg.jpg",
          "id": "vmj66ze3lattgxm3knbg",
          "tooltip": "",
          "description": "There are many variations of passages of Lorem Ipsum available, but the majority"
        }];


      let cardsList = TestUtils.renderIntoDocument(<AdminePage/>);
      cardsList.getInitialState({
        cards: []
      });

      cardsList.setState({
        cards: items
      });

      let $el  = $(ReactDOM.findDOMNode(cardsList));
      let $renderCards = $el.find('.card');
      expect($renderCards.length).toBe(cardsList.state.cards.length);

    });
  });

});