import React, { Component } from "react";
import NavbarComponent from "./components/NavbarComponent";
import MainComponent from "./components/MainComponent";
import FooterComponent from "./components/FooterComponent";
import "./App.css";
import { CLOTHES } from "./shared/list";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clothes: CLOTHES,
    };
  }
  render() {
    return (
      <div className="App">
        <NavbarComponent />;
        <MainComponent clothes={this.state.clothes} />;
        <FooterComponent />
      </div>
    );
  }
}

export default App;
