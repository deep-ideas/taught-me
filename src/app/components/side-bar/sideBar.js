import React, { Component } from 'react';
import * as styles from "./sideBar.scss";

export default class SideBar extends Component {
    render() {
        return (
            <div className={styles.sidenav}>
                <a href="/admin/dashboard">Dashboard</a>
                <a href="/admin/users">Users</a>
                <a href="#clients">Site</a>
                <a href="#contact">Sales</a>
                <a href="#contact">Emails</a>
            </div>
        )
    }
};
