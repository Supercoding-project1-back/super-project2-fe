import React, { useRef } from "react";
import styles from "./ImageUploadField.module.scss";
import addPhotoImage from "../../../assets/images/add-photo-img.png";

function ImageUploadField({ className, onChange }) {
    const fileInputRef = useRef(null);

    const fileUploadClickHandler = () => {
        fileInputRef.current.click();
    };

    const fileChangeHandler = (event) => {
        const file = event?.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                onChange(e.target.result); // Base64 데이터를 부모 컴포넌트로 전달
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div
            className={`${styles["image-field-container"]} ${className}`}
            onClick={fileUploadClickHandler}
        >
            <input
                type="file"
                ref={fileInputRef}
                style={{ display: "none" }}
                onChange={fileChangeHandler}
            />
            <img
                className={styles["img"]}
                src={addPhotoImage}
                alt="Upload"
            />
        </div>
    );
}

export default ImageUploadField;