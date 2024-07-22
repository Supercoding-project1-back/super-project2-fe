import React from "react";
import styles from "./WorkAccordionItem.module.scss";

function WorkAccordionItem({children, title, isActive, isEdit, onCheck}) {

    return (
        <div className={`${styles["accordion-item"]}`}>
            <div
                className={`${styles["accordion-title"]} ${isActive && styles["active"]}`}
            >{title}

                {isEdit &&
                    <div className={`${styles["attribute"]} ${styles["check"]}`}>
                        <div
                            className={`${styles["attribute-value-container"]} ${styles["check-box"]}`}
                            onClick={() => onCheck(!isActive)} // Trigger onCheck with the opposite of the current isActive state
                        ></div>
                    </div>
                }
            </div>

            <div className={`${styles["accordion-content"]} ${isActive && styles["active"]}`}>
                {children}
            </div>
        </div>
    );
}

export default WorkAccordionItem;
