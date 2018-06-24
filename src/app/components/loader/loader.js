import React, {Component} from "react";
import {connect} from "react-redux";
import {SCREEN_STATE_LOADING} from "pawjs/src/components/screen/action";
import * as styles from "./loader.scss";
import Header from "../header";
import Footer from "../footer";
import Transition from "pawjs/src/components/transition";

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
          {this.props.children || null}
      </div>
    );
  }
}