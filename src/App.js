import React, { Component } from "react";
import "./App.css";
import Properties from "./Properties";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      properties: [],
      fetching: true,
      error: null
    };
  }

  componentWillMount() {
    fetch("https://interview.domio.io/properties/")
      .then(res => res.json())
      .then(({ properties }) => this.setState({ properties }))
      .catch(error => this.setState({ error }))
      .then(() => this.setState({ fetching: false }));
  }

  render() {
    if (this.state.fetching) {
      return <div>Fetching</div>;
    }

    if (this.state.error) {
      return <div>Error</div>;
    }

    return <Properties properties={this.state.properties} />;
  }
}

export default App;
