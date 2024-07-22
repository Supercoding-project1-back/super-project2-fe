import React, {useEffect, useState} from "react";
import styles from "./CheckBox.module.scss";

function CheckBox({value, onChange}) {
    /* state */
    const [isChecked, setIsChecked] = useState(value === "Y");

    const changeHandler = () => {
        const changeValue = !isChecked;
        setIsChecked(changeValue);
        onChange(changeValue ? "Y" : "N");
    }

    useEffect(() => {
        setIsChecked(value === "Y");
    }, [value]);

    return (
        <input
            className={styles["check-box"]}
            type={"checkbox"}
            checked={isChecked}
            onChange={changeHandler}
        />
    );
}

export default CheckBox;
