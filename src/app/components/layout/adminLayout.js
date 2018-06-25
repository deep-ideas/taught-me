import React, { Component } from "react";
export default class adminLayout extends Component {
  render() {
    return (
      <main>
        {this.props.children}
      </main>
    )
  }
};
