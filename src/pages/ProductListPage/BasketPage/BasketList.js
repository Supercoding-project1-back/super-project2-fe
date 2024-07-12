import React from "react";
import styles from "./BasketInfo.module.scss";
import { Icon, ImageViewField } from "../../../components/Core";

function BasketInfo({ onClick, product }) {
    const { basketId, productId, productName, productCount, productPrice, image } = product;

    const removeClickHandler = async (event) => {
        event.stopPropagation();
        try {
            const response = await fetch(`http://localhost:8080/basket/${basketId}`, {
                method: 'DELETE',
            });
            if (response.ok) {
                alert("해당 카트 상품 취소되었습니다.");
            }
        } catch (e) {
            console.log(e);
        }
    };

    const wishClickHandler = async (event) => {
        event.stopPropagation();
        try {
            const response = await fetch("http://localhost:8080/wishlist", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ productId, productName, productPrice, image }),
            });
            if (response.ok) {
                alert("해당 상품은 상품리스트에 추가 되었습니다.");
            }
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <div className={styles["product-info-container"]} onClick={() => onClick(productId)}>
            <div className={styles["product-container"]}>
                <ImageViewField
                    className={styles["product-img"]}
                    src={image}
                />
                <div className={styles["product-info"]}>
                    <p className={styles["product-name"]}>{productName}</p>
                    <p className={styles["product-delivery"]}>배송 : [무료] / 기본배송</p>
                    <p className={styles["product-price"]}>{productPrice}</p>
                </div>
            </div>
            <div className={styles["product-count"]}>
                <div className={styles["icon-up"]}>
                    <Icon type="upArrow" className={styles["arrow-icon"]} />
                    <span className={styles["attribute-value"]}>{productCount}</span>
                    <Icon type="downArrow" className={styles["arrow-icon"]} />
                </div>
            </div>
            <div className={styles["product-support"]}>
                <div className={styles["button"]}>
                    <button className={styles["remove"]}
                            onClick={removeClickHandler}
                    >
                        REMOVE
                    </button>
                </div>
                <div className={styles["button"]}>
                    <button className={styles["wishlist"]}
                            onClick={wishClickHandler}
                    >
                        WISHLIST
                    </button>
                </div>
            </div>
        </div>
    );
}

export default BasketInfo;
