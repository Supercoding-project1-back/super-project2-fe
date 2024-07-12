import React, {useEffect, useRef, useState} from "react";
import styles from "./ImageUploadField.module.scss";
import {Icon} from "../index";
import addPhotoImage from "../../../assets/images/add-photo-img.png";

function ImageUploadField({className, src, onChange}) {
    const fileInputRef = useRef(null);

    /* state */
    const [uploadImage, setUploadImage] = useState();
    const [showEventContainer, setShowEventContainer] = useState(false); // 이벤트 컨테이너 표시 여부

    const fileUploadClickHandler = () =>{
        if (!showEventContainer){ //삭제 아이콘이 hide 상태일 경우 파일 업로드
            fileInputRef.current.click();
        }
    }

    /* input 태그 값 변경 이벤트*/
    const fileChangeHandler= (event) => {
        const file = event?.target.files[0];

        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setUploadImage(e.target.result);
            }
            reader.readAsDataURL(file);
        }

        onChange(file);
    }

    /* 삭제 아이콘 hide 이벤트 */
    const mouseLeaveHandler = () => {
        setShowEventContainer(false); // 마우스 벗어날 시 아이콘 가리기
    };

    /* 삭제 아이콘 show 이벤트 */
    const mouseOverHandler = () => {
        if (uploadImage) {
            setShowEventContainer(true); // 마우스 오버 시 아이콘 표시
        }
    }

    const clearClickHandler = () => {
        setShowEventContainer(false);
        setUploadImage(undefined);
        fileInputRef.current.value = "";
        fileChangeHandler();
    }

    useEffect(() => {
        if (typeof src === "string") {
            setUploadImage(`data:image/jpeg;base64,${src}`);
        }

    }, [src]);

    return (
        <div
            className={`${styles["image-field-container"]} ${className}`}
            onMouseOut={mouseLeaveHandler}
            onMouseOver={mouseOverHandler}
            onClick={fileUploadClickHandler}
        >
            <input
                type="file"
                ref={fileInputRef}
                style={{display:"none"}}
                onChange={fileChangeHandler}
            />
            <img
                className={styles["img"]}
                src={uploadImage || addPhotoImage}
            />
            {showEventContainer && (
                <div className={styles["event-container"]}>
                    <div className={styles["button-section"]}>
                        <button
                            className={styles["button"]}
                            onClick={clearClickHandler}
                        >
                            <Icon
                                type={"cancel"}
                                className={styles["delete-icon"]}
                            />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ImageUploadField;
