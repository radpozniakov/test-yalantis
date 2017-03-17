import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jQuery';
import TestUtils from 'react-addons-test-utils';

//component
import CardItem from 'CardItem';

describe('CardItem', () =>{

  it('should exist', ()=>{
    expect(CardItem).toExist();
  });

  describe('render from server', () => {

    it('Title card should be correctly rendered', ()=>{
      let title = 'Title card';
      let card = TestUtils.renderIntoDocument(<CardItem title={title}/>);
      let $el  = $(ReactDOM.findDOMNode(card));
      let $cardTitle = $el.find('h3').text();
      expect($cardTitle).toBe(title);
    });

    it('Description card should be correctly rendered', ()=>{
      let description = 'Short description card';
      let card = TestUtils.renderIntoDocument(<CardItem description={description}/>);
      let $el  = $(ReactDOM.findDOMNode(card));
      let $cardDescription = $el.find('.description-card').text();
      expect($cardDescription).toBe(description);
    });

    it('url image card should be correctly rendered', ()=>{
      let url = 'http://res.cloudinary.com/dtxyaujhl/image/upload/v1489771501/vmj66ze3lattgxm3knbg.jpg';
      let card = TestUtils.renderIntoDocument(<CardItem url={url}/>);
      let $el  = $(ReactDOM.findDOMNode(card));
      let $cardUrl = $el.find('img').attr('src');
      expect($cardUrl).toBe(url);
    });

    it('Tooltip card should be correctly rendered', ()=>{
      let toolTip = 'Short text of tooltip';
      let card = TestUtils.renderIntoDocument(<CardItem tooltip={toolTip}/>);
      let $el  = $(ReactDOM.findDOMNode(card));
      let $cardTooltip = $el.find('.tooltip-card-text').text();
      expect($cardTooltip).toBe(toolTip);
    });

    it("If Tooltip empty does not should be rendered", ()=>{
      let card = TestUtils.renderIntoDocument(<CardItem tooltip=""/>);
      let $el  = $(ReactDOM.findDOMNode(card));
      let $cardTooltip = $el.find('.tooltip-card-text');
      expect($cardTooltip.length).toBe(0);
    });



  });


});

