import React, { Component } from 'react';
import * as styles from "./sideBar.scss";

export default class SideBar extends Component {
    render() {
        return (
            <div className={styles.container}>

                {/* ================================================================================= */}

                <div className={styles.schoolLink}>
                    <a className={styles.schoolLinkName}>DumbWaysId</a>
                    <a className={styles.searchIcon} ><i className="fa fa-search"></i></a>
                </div>

                {/* ================================================================================= */}

                <div className={styles.navs}>
                    <ul>
                        <div>
                            <li>
                                <a>
                                    <i className="fa fa-tachometer"></i>
                                    <span>Dashboard</span>
                                </a>
                            </li>
                            <li>
                                <a>
                                    <i className="fa fa-user"></i>
                                    <span className="">Users</span>
                                </a>
                            </li>
                            <li>
                                <a>
                                    <i className="fa fa-sitemap"></i>
                                    <span>Site</span>
                                </a>
                            </li>
                            <li>
                                <a>
                                    <i className="fa fa-money"></i>
                                    <span>Sales</span>
                                </a>
                            </li>
                            <li>
                                <a>
                                    <i className="fa fa-envelope"></i>
                                    <span>Emails</span>
                                </a>
                            </li>
                        </div>

                        {/* ================================================================================= */}

                        <hr />

                        {/* ================================================================================= */}
                        <div className={styles.courses}>
                            <h3 className={styles.sectionTittle}>
                                <a>Courses</a>
                                <a className={styles.circle}>+</a>
                            </h3>

                            {/* ================================================================================= */}

                            <li>
                                <a>
                                    <span>React Native</span>
                                </a>
                            </li>
                            <li>
                                <a>
                                    <span>Django</span>
                                </a>
                            </li>
                            <li>
                                <a>
                                    <span>React JS</span>
                                </a>
                            </li>
                            <li>
                                <a>
                                    <span>Express</span>
                                </a>
                            </li>
                            <li>
                                <a>
                                    <span>MongoDB</span>
                                </a>
                            </li>
                        </div>

                        {/* ================================================================================= */}


                    </ul >
                </div >
                <div className={styles.footer}>

                    <hr />

                    <li>
                        <a>
                            <i className="fa fa-rocket"></i>
                            <span>Plan</span>
                        </a>
                    </li>
                    <li>
                        <a>
                            <i className="fa fa-question-circle"></i>
                            <span>Hep</span>
                        </a>
                    </li>
                    <li>
                        <a>
                            <i className="fa fa-cog"></i>
                            <span>Settings</span>
                        </a>
                    </li>
                </div>
                <div className={styles.avatar}>
                    <div className={styles.dropdown}>
                        <a>
                            <i className="fa fa-user-circle-o"></i>
                            <span>Teuku Fadhlul</span>
                        </a>
                        <a className={styles.upBtn}>
                            <p>^</p>
                        </a>
                    </div>
                </div>
            </div >
        )
    }
};
