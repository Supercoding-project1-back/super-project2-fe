import React, { useState, useEffect } from "react";
import styles from "./Header.module.scss";
import { NavLink, useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";

function Header() {

    const navigate = useNavigate();
    // const cartItemCount = useSelector(state => state.cart.items.length); // Assuming your cart state has an items array
    // const loginMember = useSelector(state => state.loginMember);

    const logoutClickHandler = async () => {
        const searchParams = new URLSearchParams({
            // memberId: loginMember.memberId
        });
        const response = await fetch(`http://localhost:8080/auth/logout?${searchParams}`, {
            method: "GET",
        });
        if (!response.ok) {
            alert("서버와의 통신간에 오류가 발생하였습니다. \n잠시 후에, 다시 시도해 주세요.");
            return;
        }
        navigate("/");
    };

    return (
        <header className={styles["header"]}>
            <div className={styles["section"]}>
                <div className={styles["left"]}>
                    <div className={styles["business-logo"]}>
                        <NavLink to="/mainpage" title={"MADGOAT"} className={styles["nav-links"]}>
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
                            <li className={styles["nav-item"]} onClick={logoutClickHandler}>
                                <span className={styles["form-item"]}>LOGOUT</span>
                            </li>
                            <li className={styles["nav-item"]}>
                                <NavLink to="/mypage" className={styles["nav-links"]}>MY PAGE</NavLink>
                            </li>
                            <li className={styles["nav-item"]}>
                                {/*<NavLink to="/cart" className={styles["nav-links"]}>CART ({cartItemCount})</NavLink>*/}
                                <NavLink to="/cart" className={styles["nav-links"]}>CART (0)</NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header;
