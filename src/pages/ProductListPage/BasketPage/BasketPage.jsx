import React, { useEffect, useState } from 'react';
import styles from './BasketPage.module.scss';
import BasketList from './BasketList';
import { TextField } from '../../../components/Core';

function BasketPage() {
    const [productCost, setProductCost] = useState(0);
    const [shippingCost, setShippingCost] = useState(0);
    const [totalCost, setTotalCost] = useState(0);
    const [basketList, setBasketList] = useState([]);
    const [count, setCount] = useState(0);

    const selecClickHandler = () => {
        // Implement select order logic
    };

    const allClickHandler = () => {
        // Implement all order logic
    };

    const onProductInfoClick = (productId) => {
        // Implement product info click logic
    };

    useEffect(() => {
        // Fetch basket list and initialize states
        setBasketList([
            // Dummy data
            { productId: 1, productName: 'Product 1', productCount: 1, productPrice: 1000, image: 'image1.jpg' },
            { productId: 2, productName: 'Product 2', productCount: 2, productPrice: 2000, image: 'image2.jpg' },
        ]);
        setCount(2);
        setTotalCost(3000);
    }, []);

    return (
        <div className={styles.content}>
            <div className={styles.product}>
                <span className={styles.myProduct}>My product - {count}</span>
            </div>
            <BasketList basketList={basketList} onProductInfoClick={onProductInfoClick} />

            <div className={styles.domainRow}>
                <div className={`${styles.domainSection} ${styles.costSection}`}>
                    <span className={styles.subTitle}>비용</span>
                    <div className={styles.line}></div>
                    <div className={styles.row}>
                        <div className={styles.attribute}>
                            <div className={styles.attributeLabel}>PRODUCT</div>
                            <div className={styles.attributeValueContainer}>
                                <TextField
                                    type="number"
                                    className={styles.attributeValue}
                                    value={productCost}
                                    onChange={(e) => setProductCost(Number(e.target.value))}
                                />
                            </div>
                        </div>
                    </div>

                    <div className={styles.row}>
                        <div className={styles.attribute}>
                            <div className={styles.attributeLabel}>SHIPPING</div>
                            <div className={styles.attributeValueContainer}>
                                <TextField
                                    type="number"
                                    className={styles.attributeValue}
                                    value={shippingCost}
                                    onChange={(e) => setShippingCost(Number(e.target.value))}
                                />
                            </div>
                        </div>
                    </div>

                    <div className={styles.row}>
                        <div className={styles.attribute}>
                            <div className={styles.attributeLabel}>SUBTOTAL</div>
                            <div className={styles.attributeValueContainer}>
                                <span className={`${styles.attributeValue} ${styles.totalCost}`}>{totalCost}원</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.buttonSection}>
                        <button className={`${styles.button} ${styles.select}`} onClick={selecClickHandler}>
                            SELECT ORDER
                        </button>
                        <button className={`${styles.button} ${styles.all}`} onClick={allClickHandler}>
                            ALL ORDER
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BasketPage;