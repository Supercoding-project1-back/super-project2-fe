import React from "react";
import styles from "./ImageViewField.module.scss";

function ImageViewField({ className, src }) {

    return (
        <div className={`${styles["image-field-container"]} ${className}`}>
            <img
                className={styles["img"]}
                src={src}
                alt="이미지"
            />
        </div>
    );
}

export default ImageViewField;



// 이전 코드
// import React from "react";
// import styles from "./ImageViewField.module.scss";

// function ImageViewField({ className, src }) {

//     return (
//         <div className={`${styles["image-field-container"]} ${className}`}>
//             <img
//                 className={styles["img"]}
//                 src={src && `data:image/jpeg;base64,${src}`}
//             />
//         </div>
//     );
// }

// export default ImageViewField;
