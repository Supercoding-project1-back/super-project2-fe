import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styles from "./Header.module.scss";

function Header() {
    const navigate = useNavigate();
    const isAuthenticated = localStorage.getItem("isAuthenticated");

    const logoutClickHandler = () => {
        const confirmLogout = window.confirm('로그아웃 하시겠습니까?');

        if (confirmLogout) {
            // 로컬 스토리지에서 로그인 상태 삭제
            localStorage.removeItem("isAuthenticated");
            navigate("/");
        }
    };

    return (
        <header className={styles["header"]}>
            <div className={styles["section"]}>
                <div className={styles["left"]}>
                    <div className={styles["business-logo"]}>
                        <NavLink to="/" title={"MADGOAT"} className={styles["nav-links"]}>
                            MADGOAT
                        </NavLink>
                    </div>
                </div>
                <div className={styles["right"]}>
                    <nav className={styles["nav"]}>
                        <ul className={styles["nav-menu"]}>
                            <li className={styles["nav-item"]}>
                                <NavLink to="/search" className={styles["nav-links"]}>SEARCH</NavLink>
                            </li>
                            <li className={styles["nav-item"]}>
                                {isAuthenticated ? (
                                    <NavLink to="#" className={styles["nav-links"]} onClick={logoutClickHandler}>
                                        LOGOUT
                                    </NavLink>
                                ) : (
                                    <NavLink to="/login" className={styles["nav-links"]}>
                                        LOGIN
                                    </NavLink>
                                )}
                            </li>
                            <li className={styles["nav-item"]}>
                                <NavLink to="/mypage" className={styles["nav-links"]}>MY PAGE</NavLink>
                            </li>
                            <li className={styles["nav-item"]}>
                                <NavLink to="/basket" className={styles["nav-links"]}>CART (0)</NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header;