import React, { Component } from "react";
import Header from "../header/header"
export default class adminLayout extends Component {
  render() {
    return (
      <main className="container">
        {this.props.children}
      </main>
    )
  }
};
