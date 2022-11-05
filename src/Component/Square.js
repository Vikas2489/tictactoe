import React from 'react';

class Square extends React.Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <div onClick={this.props.handleClick} className="square">
        <h5>{this.props.value}</h5>
      </div>
    );
  }
}

export default Square;
