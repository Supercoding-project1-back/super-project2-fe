import React from "react";
import styles from "./ImagePreview.module.scss";
import { Icon } from "../index";

function ImagePreview({ className, src, onClear }) {
  return (
    <>
      {src ? (
        <div className={`${styles["image-field-container"]} ${className}`}>
          <img className={styles["img"]} src={src} alt="Preview" />
          <div className={styles["event-container"]}>
            <div className={styles["button-section"]}>
              <button
                className={styles["button"]}
                onClick={onClear}
              >
                <Icon
                  type={"cancel"}
                  className={styles["delete-icon"]}
                />
              </button>
            </div>
          </div>
        </div>
      ) : (
        null
      )}
    </>
  );
}

export default ImagePreview;