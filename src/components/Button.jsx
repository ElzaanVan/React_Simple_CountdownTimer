import React from "react";

class Button extends React.Component {
  render() {
    return (
      <button onClick={this.props.onClickHandler}>{this.props.label}</button>
    );
  }
}
export default Button;
