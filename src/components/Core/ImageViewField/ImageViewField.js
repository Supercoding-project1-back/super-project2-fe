import React from "react";
import styles from "./ImageViewField.module.scss";

function ImageViewField({className, src}) {

    return (
        <div className={`${styles["image-field-container"]} ${className}`}>
            <img
                className={styles["img"]}
                src={src && `data:image/jpeg;base64,${src}`}
            />
        </div>
    );
}

export default ImageViewField;
