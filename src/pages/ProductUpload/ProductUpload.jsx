import React, { useState } from 'react';
import styles from './ProductUpload.module.scss';
import { ImageUploadField, ImageViewField } from '../../components/Core';

const ProductUpload = () => {
  const [product, setProduct] = useState({
    category: '',
    name: '',
    image: '',
    price: 0,
    size: '',
    careGuide: '',
    stock: 0,
  });

  const handleImageChange = (imageData) => {
    setProduct(prevProduct => ({
      ...prevProduct,
      image: imageData
    }));
  };


  return (
    <div className={styles.wrap}>
      <h2>상품등록</h2>

      <ul>
        <li>
          <div className={styles.subTitle}>Category</div>
          <div className={styles.inputWrap}>
            <select>
              <option>선택해주세요</option>
              <option>New Apparal</option>
              <option>BAGS</option>
              <option>WALLETS</option>
              <option>ACCESSORIES</option>
              <option>SCARVES</option>
              <option>GLOVES</option>
            </select>
          </div>
        </li>
        <li>
          <div className={styles.subTitle}>Product Name</div>
          <div className={styles.inputWrap}>
            <input type='text' placeholder='상품이름을 입력해주세요' />
          </div>
        </li>
        <li>
          <div className={styles.subTitle}>Product Image</div>
          <div className={styles.inputWrap}>
            <ImageUploadField
              className={styles.ImgUpload}
              onChange={handleImageChange}
            />
            <ImageViewField
              className={styles.ImgVeiw}
            />
          </div>
        </li>
        <li>
          <div className={styles.subTitle}>Product Price</div>
          <div className={styles.inputWrap}>
            <input type='number' placeholder='숫자만 입력해주세요' />
          </div>
        </li>
        <li>
          <div className={styles.subTitle}>Product Size</div>
          <div className={styles.inputWrap}>
            <input type='text' />
          </div>
        </li>
        <li>
          <div className={styles.subTitle}>Care Guide</div>
          <div className={styles.inputWrap}>
            <textarea placeholder='상품 관리 방법에 대해 작성해주세요'></textarea>
          </div>
        </li>
        <li>
          <div className={styles.subTitle}>Description</div>
          <div className={styles.inputWrap}>
            <textarea placeholder='상품에 대해 설명해주세요'></textarea>
          </div>
        </li>
        <li>
          <div className={styles.subTitle}>Product stock</div>
          <div className={styles.inputWrap}>
            <input type='text' />
          </div>
        </li>
        <li>
          <div className={styles.subTitle}>Delivery Fee</div>
          <div className={styles.inputWrap}>
            <textarea></textarea>
          </div>
        </li>
      </ul>

      <div className={styles.btnWrap}>
        <button>상품 등록하기</button>
      </div>
    </div>
  );
};

export default ProductUpload;