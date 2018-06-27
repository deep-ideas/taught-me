import React, { Component } from "react";

import SideBar from "../side-bar/sideBar";

export default class adminLayout extends Component {
  render() {
    return (
      <main>
      <SideBar />
        {this.props.children}
      </main>
    )
  }
};
