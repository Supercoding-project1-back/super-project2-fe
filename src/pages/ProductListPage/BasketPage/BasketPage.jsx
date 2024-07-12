import React, {useEffect, useState} from "react";
import styles from "./BasketPage.module.scss";
import BasketList from "./BasketList";
import {TextField} from "../../../components/Core";


function BasketPage() {
    const [productCost, setProductCost] = useState(0);
    const [shippingCost, setShippingCost] = useState(0);
    const [totalCost, setTotalCost] = useState(0);
    const [basketList, setBasketList] = useState([]);
    const [count, setCount] = useState(0);

    const selecClickHandler = () => {
        // Implement select order logic
    }

    const allClickHandler = () => {
        // Implement all order logic
    }

    const onProductInfoClick = (productId) => {
        // Implement product info click logic
    }

    useEffect(() => {
        // Fetch basket list and initialize states
        setBasketList([
            // Dummy data
            { productId: 1, productName: 'Product 1', productCount: 1, productPrice: 1000, image: 'image1.jpg' },
            { productId: 2, productName: 'Product 2', productCount: 2, productPrice: 2000, image: 'image2.jpg' }
        ]);
        setCount(2);
        setTotalCost(3000);
    }, []);

    return (
        <div className={styles["content"]}>

            <div className={styles["product"]}>
                <span className={styles["my-product"]}> My product - {count}</span>
            </div>
            <BasketList basketList={basketList} onProductInfoClick={onProductInfoClick}/>

            <div className={styles["domain-row"]}>

                <div className={`${styles["domain-section"]} ${styles["cost-section"]}`}>
                    <span className={styles["sub-title"]}>비용</span>
                    <div className={styles["line"]}></div>
                    <div className={styles["row"]}>
                        <div className={styles["attribute"]}>
                            <div className={styles["attribute-label"]}>
                                PRODUCT
                            </div>
                            <div className={styles["attribute-value-container"]}>
                                <TextField
                                    type={"number"}
                                    className={styles["attribute-value"]}
                                    value={productCost}
                                    onChange={(e) => setProductCost(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>

                    <div className={styles["row"]}>
                        <div className={styles["attribute"]}>
                            <div className={styles["attribute-label"]}>
                                SHIPPING
                            </div>
                            <div className={styles["attribute-value-container"]}>
                                <TextField
                                    type={"number"}
                                    className={styles["attribute-value"]}
                                    value={shippingCost}
                                    onChange={(e) => setShippingCost(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>

                    <div className={styles["row"]}>
                        <div className={styles["attribute"]}>
                            <div className={styles["attribute-label"]}>
                                SUBTOTAL
                            </div>
                            <div className={styles["attribute-value-container"]}>
                                <span
                                    className={`${styles["attribute-value"]} ${styles["total-cost"]}`}>{totalCost}원</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles["button-section"]}>
                        <button className={`${styles["button"]} ${styles["select"]}`}
                                onClick={selecClickHandler}
                        > SELECT ORDER
                        </button>
                        <button className={`${styles["button"]} ${styles["all"]}`}
                                onClick={allClickHandler}
                        >ALL ORDER
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BasketPage;
