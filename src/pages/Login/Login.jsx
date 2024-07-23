import React, { useState } from "react";
import styles from "./Login.module.scss";
import { TextField } from "../../components/Core";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signHandler = async () => {
    const data = { email, password };
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error("로그인하는데 실패하였습니다.");
      }
      // const responseData = await response.json();
      const token = response.headers.get('token'); // 헤더에서 토큰 가져오기

      // 로그인 성공 시, 로컬 스토리지에 토큰과 로그인 상태 저장
      localStorage.setItem("authToken", token);
      localStorage.setItem("isAuthenticated", "true");
      navigate("/");
    } catch (error) {
      alert("로그인 정보를 다시 입력해 주세요.");
    }
  };

  const joinHandler = () => {
    navigate("/join");
  };

  return (
    <div className={styles["content"]}>
      <div className={styles["card"]}>
        <div className={styles["border"]}>
          <div className={styles["firstSection"]}>
            <span className={styles["loginTitle"]}>로그인</span>
          </div>
          <div className={styles["inputSection"]}>
            <div className={styles["textSection"]}>
              <TextField
                className={styles["loginId"]}
                label={"아이디"}
                value={email}
                placeholder={"이메일을 입력해주세요"}
                onChange={(value) => setEmail(value)}
              />
            </div>
            <div className={styles["textSection"]}>
              <TextField
                className={styles["password"]}
                type="password"
                label={"비밀번호"}
                value={password}
                placeholder={"비밀번호를 입력해주세요"}
                onChange={(value) => setPassword(value)}
              />
            </div>
          </div>
          <div className={styles["buttonSection"]}>
            <button className={styles["login"]} onClick={signHandler}>
              SIGN IN
            </button>
            <button className={styles["join"]} onClick={joinHandler}>
              JOIN US
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;