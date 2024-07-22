import React from "react";
import styles from "./SideMenu.module.scss";
import { NavLink, useNavigate } from "react-router-dom";

function SideMenu() {
    const navigate = useNavigate();

    const handleNavClick = (path, category) => {
        navigate({
            pathname: path,
            search: `?category=${category}`
        });
    };

    const handleAlertClick = (e) => {
        e.preventDefault();
        alert("페이지 준비중입니다.");
    }

    return (
        <>
            <div className={styles["side-menu"]}>
                <nav className={styles["nav"]}>
                    <ul className={styles["nav-menu"]}>
                        <li className={styles["nav-item"]}>
                            <span onClick={() => handleNavClick("/mainpage", "all")} className={styles["nav-links"]}>ALL</span>
                        </li>
                        <li className={styles["nav-item"]}>
                            <span onClick={() => handleNavClick("/mainpage", "bags")} className={styles["nav-links"]}>BAGS</span>
                        </li>
                        <li className={styles["nav-item"]}>
                            <span onClick={() => handleNavClick("/mainpage", "wallets")} className={styles["nav-links"]}>WALLETS</span>
                        </li>
                        <li className={styles["nav-item"]}>
                            <span onClick={() => handleNavClick("/mainpage", "accessories")} className={styles["nav-links"]}>ACCESSORIES</span>
                        </li>
                        <li className={styles["nav-item"]}>
                            <span onClick={() => handleNavClick("/mainpage", "scarves")} className={styles["nav-links"]}>SCARVES</span>
                        </li>
                        <li className={styles["nav-item"]}>
                            <span onClick={() => handleNavClick("/mainpage", "gloves")} className={styles["nav-links"]}>GLOVES</span>
                        </li>
                        <li className={styles["nav-item"]}>
                            <NavLink to="/about" className={styles["nav-links"]} onClick={handleAlertClick}>ABOUT</NavLink>
                        </li>
                        <li className={styles["nav-item"]}>
                            <NavLink to="/notice" className={styles["nav-links"]} onClick={handleAlertClick}>NOTICE</NavLink>
                        </li>
                        <li className={styles["nav-item"]}>
                            <NavLink to="/contact" className={styles["nav-links"]} onClick={handleAlertClick}>CONTACT</NavLink>
                        </li>
                        <li className={styles["nav-item"]}>
                            <a href="https://www.instagram.com/madgoat.official/" className={styles["nav-links"]} target="_blank" rel="noopener noreferrer">INSTAGRAM</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    );
}

export default SideMenu;
