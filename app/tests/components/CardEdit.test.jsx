import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jQuery';
import TestUtils from 'react-addons-test-utils';
//
import CardEdit from 'CardEdit';

describe('CardEdit', () =>{
  it('should exist', ()=>{
    expect(CardEdit).toExist();
  });

  describe('render from server', () =>{

    it('Title card should be correctly rendered', ()=>{
      let title = 'Title card';
      let card = TestUtils.renderIntoDocument(<CardEdit title={title}/>);
      let $el  = $(ReactDOM.findDOMNode(card));
      let $cardTitle = $el.find('input.title').val();
      expect($cardTitle).toBe(title);
    });

    it('Description card should be correctly rendered', ()=>{
      let description = 'Description card';
      let card = TestUtils.renderIntoDocument(<CardEdit description={description}/>);
      let $el  = $(ReactDOM.findDOMNode(card));
      let $cardDescription = $el.find('textarea.description').val();
      expect($cardDescription).toBe(description);
    });

    it('url image card should be correctly rendered', ()=>{
      let url = 'http://res.cloudinary.com/dtxyaujhl/image/upload/v1489771501/vmj66ze3lattgxm3knbg.jpg';
      let card = TestUtils.renderIntoDocument(<CardEdit url={url}/>);
      let $el  = $(ReactDOM.findDOMNode(card));
      let $cardUrl = $el.find('img').attr('src');
      expect($cardUrl).toBe(url);
    });

    it('Tooltip card should be correctly rendered', ()=>{
      let toolTip = 'Tooltip card';
      let card = TestUtils.renderIntoDocument(<CardEdit tooltip={toolTip}/>);
      let $el  = $(ReactDOM.findDOMNode(card));
      let $cardTooltip = $el.find('textarea.tooltip-textarea').val();
      expect($cardTooltip).toBe(toolTip);
    });

    it("If Tooltip empty icon should have another color", ()=>{
      let card = TestUtils.renderIntoDocument(<CardEdit tooltip=""/>);
      let $el  = $(ReactDOM.findDOMNode(card));
      let $cardTooltip = $el.find('.tooltipNotEmpty');
      expect($cardTooltip.length).toBe(0);
    });


  });
});