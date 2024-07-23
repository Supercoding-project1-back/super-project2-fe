import React, { useState } from "react";
import styles from "./Join.module.scss";
import { TextField } from "../../../components/Core";
import { useNavigate } from "react-router-dom";

// 비밀번호 유효성 검사 함수
const validatePassword = (password) => {
    const passwordPattern = /^(?=.*[a-z])(?=.*\d)[a-z\d]{8,20}$/;
    return passwordPattern.test(password);
};

// 폼 유효성 검사 함수
const validateForm = (email, password, passwordConfirm, name, address, phoneNumber, gender, birthDate) => {
    const newErrors = {};
    if (!email) newErrors.email = "이메일을 입력해주세요";
    if (!password) newErrors.password = "비밀번호를 입력해주세요";
    if (!validatePassword(password)) newErrors.password = "비밀번호는 8자 이상 20자 이하 숫자와 영문소문자 조합이어야 합니다.";
    if (!passwordConfirm) newErrors.passwordConfirm = "비밀번호 확인을 입력해주세요";
    if (password !== passwordConfirm) newErrors.passwordConfirm = "비밀번호가 일치하지 않습니다";
    if (!name) newErrors.name = "이름을 입력해주세요";
    if (!address) newErrors.address = "주소를 입력해주세요";
    if (!phoneNumber) newErrors.phoneNumber = "휴대폰번호를 입력해주세요";
    if (!gender) newErrors.gender = "성별을 입력해주세요";
    if (!birthDate) newErrors.birthDate = "생년월일을 입력해주세요";
    return newErrors;
};

function Join() {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [address, setAddress] = useState("");
    const [gender, setGender] = useState("");
    const [birthDate, setBirthDate] = useState("");

    const [errors, setErrors] = useState({});

    const signHandler = async () => {
        // 폼 유효성 검사
        const newErrors = validateForm(email, password, passwordConfirm, name, address, phoneNumber, gender, birthDate);
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        const data = {
            email,
            password,
            name,
            phoneNumber,
            address,
            gender,
            birthDate,
        };

        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/auth/sign-up`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || "회원가입에 실패했습니다.");
            }

            alert("회원가입이 완료되었습니다.");
            navigate("/login");
        } catch (error) {
            alert(error.message || "회원가입 중 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.");
        }
    };

    return (
        <div className={styles["content"]}>
            <div className={styles["card"]}>
                <div className={styles["border"]}>
                    <div className={styles["firstSection"]}>
                        <span className={styles["signUpTitle"]}>회원가입</span>
                    </div>
                    <div className={styles["inputSection"]}>
                        <div className={styles["textSection"]}>
                            <TextField
                                className={`${styles["email"]} ${errors.email ? styles["error"] : ""}`}
                                value={email}
                                label={"아이디"}
                                placeholder={"이메일을 입력해주세요"}
                                onChange={(value) => {
                                    setEmail(value);
                                    setErrors({ ...errors, email: "" });
                                }}
                            />
                            {errors.email && <p className={styles["errorMessage"]}>{errors.email}</p>}
                        </div>
                        <div className={styles["textSection"]}>
                            <TextField
                                className={`${styles["password"]} ${errors.password ? styles["error"] : ""}`}
                                type="password"
                                label={"비밀번호"}
                                value={password}
                                placeholder={"비밀번호를 입력해주세요"}
                                onChange={(value) => {
                                    setPassword(value);
                                    setErrors({ ...errors, password: "" });
                                }}
                            />
                            {errors.password && <p className={styles["errorMessage"]}>{errors.password}</p>}
                        </div>
                        <div className={styles["textSection"]}>
                            <TextField
                                className={`${styles["passwordConfirm"]} ${errors.passwordConfirm ? styles["error"] : ""}`}
                                type="password"
                                label={"비밀번호 확인"}
                                value={passwordConfirm}
                                placeholder={"비밀번호를 한 번 더 입력해주세요"}
                                onChange={(value) => {
                                    setPasswordConfirm(value);
                                    setErrors({ ...errors, passwordConfirm: "" });
                                }}
                            />
                            {errors.passwordConfirm && <p className={styles["errorMessage"]}>{errors.passwordConfirm}</p>}
                        </div>
                        <div className={styles["textSection"]}>
                            <TextField
                                className={`${styles["name"]} ${errors.name ? styles["error"] : ""}`}
                                value={name}
                                label={"이름"}
                                placeholder={"이름을 입력해주세요"}
                                onChange={(value) => {
                                    setName(value);
                                    setErrors({ ...errors, name: "" });
                                }}
                            />
                            {errors.name && <p className={styles["errorMessage"]}>{errors.name}</p>}
                        </div>
                        <div className={styles["textSection"]}>
                            <TextField
                                className={`${styles["address"]} ${errors.address ? styles["error"] : ""}`}
                                value={address}
                                label={"주소"}
                                placeholder={"주소를 입력해주세요"}
                                onChange={(value) => {
                                    setAddress(value);
                                    setErrors({ ...errors, address: "" });
                                }}
                            />
                            {errors.address && <p className={styles["errorMessage"]}>{errors.address}</p>}
                        </div>
                        <div className={styles["textSection"]}>
                            <TextField
                                className={`${styles["phoneNumber"]} ${errors.phoneNumber ? styles["error"] : ""}`}
                                value={phoneNumber}
                                label={"휴대폰번호"}
                                placeholder={"휴대폰번호를 입력해주세요"}
                                onChange={(value) => {
                                    setPhoneNumber(value);
                                    setErrors({ ...errors, phoneNumber: "" });
                                }}
                            />
                            {errors.phoneNumber && <p className={styles["errorMessage"]}>{errors.phoneNumber}</p>}
                        </div>
                        <div className={styles["textSection"]}>
                            <TextField
                                className={`${styles["gender"]} ${errors.gender ? styles["error"] : ""}`}
                                value={gender}
                                label={"성별"}
                                placeholder={"'남성' 또는 '여성'로 입력해주세요"}
                                onChange={(value) => {
                                    setGender(value);
                                    setErrors({ ...errors, gender: "" });
                                }}
                            />
                            {errors.gender && <p className={styles["errorMessage"]}>{errors.gender}</p>}
                        </div>
                        <div className={styles["textSection"]}>
                            <TextField
                                className={`${styles["birthDate"]} ${errors.birthDate ? styles["error"] : ""}`}
                                value={birthDate}
                                label={"생년월일"}
                                placeholder={"생년월일 (YYYY-MM-DD)"}
                                onChange={(value) => {
                                    setBirthDate(value);
                                    setErrors({ ...errors, birthDate: "" });
                                }}
                            />
                            {errors.birthDate && <p className={styles["errorMessage"]}>{errors.birthDate}</p>}
                        </div>
                    </div>
                    <div className={styles["buttonSection"]}>
                        <button className={styles["signIn"]} onClick={signHandler}>
                            SIGN UP
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Join;