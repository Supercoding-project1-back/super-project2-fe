import React, { useEffect, useState } from "react";
import styles from "./SearchField.module.scss";
import Icon from "../Icon/Icon";

function SearchField({ value, onChange, onKeyUp, label, className }) {
    const [inputValue, setInputValue] = useState(value || "");
    const [focused, setFocused] = useState(false);

    const inputChangeHandler = (event) => {
        setInputValue(event.target.value);
        onChange(event.target.value);
    };

    const inputClearHandler = () => {
        setFocused(false);
        setInputValue("");
        onChange("");
    };

    const focusHandler = () => {
        setFocused(true);
    };

    const blurHandler = (event) => {
        if (event.target.value === "") {
            setFocused(false);
        }
    };

    useEffect(() => {
        setInputValue(value);
    }, [value]);

    return (
        <div className={`${styles.container} ${className}`}>
            <div className={`${styles["input-container"]} ${focused ? styles.focused : ""}`}>
                <label className={styles["label"]}>{label}</label>
                <Icon type={"search"} className={styles["icon-search"]} />
                <input
                    className={styles.input}
                    onFocus={focusHandler}
                    onBlur={blurHandler}
                    onChange={inputChangeHandler}
                    onKeyUp={onKeyUp}
                    value={inputValue}
                />
                {inputValue && (
                    <button className={styles["clear"]} onClick={inputClearHandler} tabIndex={-1}>
                        <Icon type={"cancel"} className={styles["icon-clear"]} />
                    </button>
                )}
            </div>
        </div>
    );
}

export default SearchField;
