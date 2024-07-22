import React from "react";
import {Outlet} from "react-router-dom";
import Header from "../components/Header/Header";
import SideMenu from "../components/SideMenu/SideMenu";
import styles from "./Headerlayout.module.scss";

function HeaderLayout() {
    return (
        <>
            <Header/>
            <div className={styles["layout-container"]}>
                <SideMenu/>
                <Outlet/>
            </div>
        </>
    )
}

export default HeaderLayout;