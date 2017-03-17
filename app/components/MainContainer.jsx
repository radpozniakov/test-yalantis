import React from 'react';
import Header from 'Header';

const Main = React.createClass({
  render() {
    return (
      <div>
       <Header/>
        {this.props.children}
      </div>
    );
  }
});

export default Main;