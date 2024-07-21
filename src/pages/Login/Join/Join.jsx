import React, { useState } from "react";
import styles from "./Join.module.scss";
import { TextField } from "../../../components/Core";
import { useNavigate } from "react-router-dom";

function Join() {
    const navigate = useNavigate();

    // 상태 변수 선언
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [address, setAddress] = useState("");
    const [gender, setGender] = useState("");
    const [birthDate, setBirthDate] = useState("");

    // 회원가입 핸들러
    const signHandler = async () => {
        // 비밀번호 확인
        if (password !== passwordConfirm) {
            alert("비밀번호가 일치하지 않습니다.");
            return;
        }

        // 데이터 객체
        const data = {
            email,
            password,
            passwordConfirm,
            name,
            phoneNumber,
            address,
            gender,
            birthDate
        };

        try {
            // 회원가입 요청
            const response = await fetch("http://13.54.82.156:8080/auth/sign-up", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                // 서버 응답이 실패인 경우
                const errorData = await response.json();
                throw new Error(errorData.message || "회원가입에 실패했습니다.");
            }

            // 회원가입 성공 시, 로그인 페이지로 이동
            alert("회원가입이 완료되었습니다.");
            navigate("/login");
        } catch (error) {
            // 에러 처리
            alert(error.message || "회원가입 중 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.");
        }
    };

    return (
        <div className={styles["content"]}>
            <div className={styles["card"]}>
                <div className={styles["border"]}>
                    <div className={styles["first-section"]}>
                        <span className={styles["id-title"]}>회원가입</span>
                    </div>
                    <div className={styles["input-section"]}>
                        <div className={styles["text-section"]}>
                            <TextField
                                className={styles["email"]}
                                value={email}
                                placeholder={"이메일"}
                                onChange={(value) => setEmail(value)}
                            />
                        </div>
                        <div className={styles["text-section"]}>
                            <TextField
                                className={styles["password"]}
                                type="password"
                                value={password}
                                placeholder={"비밀번호"}
                                onChange={(value) => setPassword(value)}
                            />
                        </div>
                        <div className={styles["text-section"]}>
                            <TextField
                                className={styles["passwordConfirm"]}
                                type="password"
                                value={passwordConfirm}
                                placeholder={"비밀번호 확인"}
                                onChange={(value) => setPasswordConfirm(value)}
                            />
                        </div>
                        <div className={styles["text-section"]}>
                            <TextField
                                className={styles["name"]}
                                value={name}
                                placeholder={"이름"}
                                onChange={(value) => setName(value)}
                            />
                        </div>
                        <div className={styles["text-section"]}>
                            <TextField
                                className={styles["address"]}
                                value={address}
                                placeholder={"주소"}
                                onChange={(value) => setAddress(value)}
                            />
                        </div>
                        <div className={styles["text-section"]}>
                            <TextField
                                className={styles["phoneNumber"]}
                                value={phoneNumber}
                                placeholder={"전화번호"}
                                onChange={(value) => setPhoneNumber(value)}
                            />
                        </div>
                        <div className={styles["text-section"]}>
                            <TextField
                                className={styles["gender"]}
                                value={gender}
                                placeholder={"성별"}
                                onChange={(value) => setGender(value)}
                            />
                        </div>
                        <div className={styles["text-section"]}>
                            <TextField
                                className={styles["birthDate"]}
                                value={birthDate}
                                placeholder={"생년월일 (YYYY-MM-DD)"}
                                onChange={(value) => setBirthDate(value)}
                            />
                        </div>
                    </div>
                    <div className={styles["button-section"]}>
                        <button className={styles["sign-in"]} onClick={signHandler}>
                            SIGN UP
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Join;