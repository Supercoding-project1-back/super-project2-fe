import React from 'react';
import styles from './ProductDetail.module.scss';
import ProductDetailInfo from './ProductDetailInfo';
import ProductDescription from './ProductDescription';

const ProductDetail = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrap}>
        <ProductDetailInfo />
        <ProductDescription />
      </div>
    </div>
  );
};

export default ProductDetail;