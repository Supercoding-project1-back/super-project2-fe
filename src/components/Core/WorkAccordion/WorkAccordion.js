import React from "react";
import styles from "./WorkAccordion.module.scss";
import WorkAccordionItem from "./WorkAccordionItem";

const titles = [
    "Size",
    "Material"
]

function WorkAccordion({children, activeIndexes, isEdit, onCheck}) {

    return (
        <div className={styles["accordion"]}>
            {React.Children.map(children, (child, index) => {
                return (
                    <WorkAccordionItem
                        key={index} // Added key for unique identification
                        title={titles[index]}
                        onCheck={(checked) => onCheck(index, checked)}
                        isActive={activeIndexes.indexOf(index) !== -1}
                        isEdit={isEdit}
                    >
                        {child}
                    </WorkAccordionItem>
                )
            })}
        </div>
    );
}

export default WorkAccordion;
