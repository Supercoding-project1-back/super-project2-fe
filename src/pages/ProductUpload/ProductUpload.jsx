import React from 'react';
import styles from './ProductUpload.module.scss';

const ProductUpload = () => {
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
            <input type='file' />
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
            <textarea></textarea>
          </div>
        </li>
        <li>
          <div className={styles.subTitle}>Product stock</div>
          <div className={styles.inputWrap}>
            <input type='text' />
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