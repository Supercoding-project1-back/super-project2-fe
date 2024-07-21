import React, { useState } from "react";
import styles from "./Join.module.scss";
import { TextField } from "../../../components/Core";
import { useNavigate } from "react-router-dom";

function Join() {
    const navigate = useNavigate();

    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [mobile, setMobile] = useState("");
    const [email, setEmail] = useState("");
    const [addinfo, setAddInfo] = useState("");

    const signHandler = async () => {
        if (password !== passwordConfirm) {
            alert("비밀번호가 일치하지 않습니다.");
            return;
        }

        const data = { id, password };
        try {
            const response = await fetch("http://localhost:8080/auth/sign-up", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });
            if (!response.ok) {
                throw new Error("회원가입을 성공하였습니다.");
            }
        } catch (error) {
            alert("회원가입에 실패했습니다.");
        }
    };

    const joinHandler = () => {
        navigate("/join");
    };

    return (
        <>
            <div className={styles["content"]}>
                <div className={styles["card"]}>
                    <div className={styles["border"]}>
                        <div className={styles["first-section"]}>
                            <span className={styles["id-title"]}></span>
                        </div>
                        <div className={styles["input-section"]}>
                            <div className={styles["text-section"]}>
                                <TextField
                                    className={styles["id"]}
                                    value={id}
                                    placeholder={"id"}
                                    onChange={(value) => setId(value)}
                                />
                            </div>
                            <div className={styles["text-section"]}>
                                <TextField
                                    className={styles["password"]}
                                    value={password}
                                    placeholder={"password"}
                                    onChange={(value) => setPassword(value)}
                                />
                            </div>
                            <div className={styles["text-section"]}>
                                <TextField
                                    className={styles["passwordConfirm"]}
                                    value={passwordConfirm}
                                    placeholder={"passwordConfirm"}
                                    onChange={(value) => setPasswordConfirm(value)}
                                />
                            </div>
                            <div className={styles["text-section"]}>
                                <TextField
                                    className={styles["name"]}
                                    value={name}
                                    placeholder={"name"}
                                    onChange={(value) => setName(value)}
                                />
                            </div>
                            <div className={styles["text-section"]}>
                                <TextField
                                    className={styles["address"]}
                                    value={address}
                                    placeholder={"address"}
                                    onChange={(value) => setAddress(value)}
                                />
                            </div>
                            <div className={styles["text-section"]}>
                                <TextField
                                    className={styles["phone"]}
                                    value={phone}
                                    placeholder={"phone"}
                                    onChange={(value) => setPhone(value)}
                                />
                            </div>
                            <div className={styles["text-section"]}>
                                <TextField
                                    className={styles["mobile"]}
                                    value={mobile}
                                    placeholder={"mobile"}
                                    onChange={(value) => setMobile(value)}
                                />
                            </div>
                            <div className={styles["text-section"]}>
                                <TextField
                                    className={styles["email"]}
                                    value={email}
                                    placeholder={"email"}
                                    onChange={(value) => setEmail(value)}
                                />
                            </div>
                            <div className={styles["text-section"]}>
                                <TextField
                                    className={styles["addinfo"]}
                                    value={addinfo}
                                    placeholder={"addinfo"}
                                    onChange={(value) => setAddInfo(value)}
                                />
                            </div>
                        </div>
                        <div className={styles["button-section"]}>
                            <button className={styles["SearchAddress"]} onClick={signHandler}>
                                주소 검색
                            </button>
                        </div>
                        <div className={styles["button-section"]}>
                            <button className={styles["sign-in"]} onClick={joinHandler}>
                                SIGN IN
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Join;
