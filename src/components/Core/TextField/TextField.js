import React, { useEffect, useState } from "react";
import styles from "./TextField.module.scss";
import { Icon } from "../index";


function TextField({ value, label, onChange, type, disabled, className, placeholder }) {
    const [inputValue, setInputValue] = useState(value || "");

    const inputChangeHandler = (event) => {
        setInputValue(event.target.value);
        onChange && onChange(event.target.value);
    };

    const inputClearHandler = () => {
        setInputValue("");
        onChange && onChange("");
    };

    useEffect(() => {
        setInputValue(value || "");
    }, [value]);

    return (
        <div className={`${styles["container"]} ${className}`}>
            <div className={styles["input-container"]}>
                <label className={styles["label"]}>{label}</label>
                <input
                    type={type || "text"}
                    className={`${styles["input"]} ${disabled && styles["disabled"]}`}
                    disabled={disabled}
                    value={inputValue}
                    onChange={inputChangeHandler}
                    placeholder={placeholder}
                />
                {!disabled && inputValue && (
                    <button className={styles["clear"]} onClick={inputClearHandler} tabIndex={-1}>
                        <Icon type={"cancelStrokeGray"} className={styles["icon-clear"]} />
                    </button>
                )}
            </div>
        </div>
    );
}

export default TextField;
