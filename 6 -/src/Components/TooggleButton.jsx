import React from "react";

export default class ToggleButton extends React.Component {
  constructor() {
    super();
    this.state = {
      isHidden: true,
    };
    this.toggleHidden = this.toggleHidden.bind(this);
  }

  toggleHidden() {
    this.setState({
      isHidden: !this.state.isHidden,
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.toggleHidden}>Button!</button>
        {this.state.isHidden && <h1>Titre!</h1>}
      </div>
    );
  }
}
