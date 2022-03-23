import React from "react";

export default class Formulaire extends React.Component {
  constructor() {
    super();
    this.state = {
      nom: "",
      prenom: "",
      showForm: false,
    };
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(event) {
    this.setState({
      prenom: event.target.value,
    });
  }

  handleLastNameChange(event) {
    this.setState({
      nom: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      showForm: true,
    });
  }

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label>
            Nom:
            <input
              type="text"
              value={this.state.nom}
              onChange={this.handleLastNameChange}
            />
          </label>
          <br />
          <label>
            Prenom:
            <input
              type="text"
              value={this.state.prenom}
              onChange={this.handleNameChange}
            />
          </label>
          <br />
          <input type="submit" />
        </form>
        {this.state.showForm && (
          <h1>
            {this.state.prenom} {this.state.nom}
          </h1>
        )}
      </>
    );
  }
}
