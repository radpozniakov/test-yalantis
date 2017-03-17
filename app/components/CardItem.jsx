import React from 'react';

const ImageItem = React.createClass({

  getInitialState() {
    return {
      tooltipVisible: false
    };
  },

  showTooltip() {
   this.setState({
     tooltipVisible: !this.state.tooltipVisible
   });
  },

  hideTooltip() {
    this.setState({
      tooltipVisible: !this.state.tooltipVisible
    });
 },

  render: function () {
    return(
      <div className="card">
        <div
          onMouseEnter={this.showTooltip}
          onMouseLeave={this.hideTooltip}
          className="card-image car-relative">
          <img src={this.props.url} alt={this.props.title}/>
          <div className={this.state.tooltipVisible && this.props.tooltip ? "tooltip-edit-block tooltip-edit-block-active" : "tooltip-edit-block"}>
              <p>{this.props.tooltip}</p>
          </div>
          {this.props.tooltip ? <div className="tooltip">?</div> : null}
        </div>

        <div className="card-content">
          <h3 className="card-title">{this.props.title}</h3>
          <p>{this.props.description}</p>
        </div>
      </div>
    )
  }
});

export default ImageItem;