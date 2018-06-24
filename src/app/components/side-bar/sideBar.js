import React, { Component } from 'react';
import * as styles from "./sideBar.scss";

export default class SideBar extends Component {
    render() {
        return (
            <div className={styles.sidenav}>
                <a href="#about">About</a>
                <a href="#services">Services</a>
                <a href="#clients">Clients</a>
                <a href="#contact">Contact</a>
            </div>
        )
    }
};
