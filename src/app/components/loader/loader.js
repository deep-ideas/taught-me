import React, {Component} from "react";
import {connect} from "react-redux";
import SideBar from "../side-bar/sideBar";

@connect( state => {
  return {
    screenState: state.screen.state,
  };
})  
export default class Loader extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        {this.props.children.props.children[0].props.route.layout.name == "adminLayout" ? <SideBar /> : null}
          {this.props.children || null}
      </div>
    );
  }
}