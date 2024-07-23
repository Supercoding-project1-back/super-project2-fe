import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './ProductUpload.module.scss';
import { ImageUploadField, ImagePreview } from '../../components/Core';

const ProductUpload = () => {
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    category: '',
    name: '',
    images: [],  // 빈 배열로 초기화
    price: 0,
    size: '',
    careGuide: '',
    stock: 0,
    description: '',
    deliveryFee: 0  // 숫자로 초기화
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct(prevProduct => ({
      ...prevProduct,
      [name]: value
    }));
  };

  const handleImageChange = (imageData) => {
    setProduct(prevProduct => ({
      ...prevProduct,
      images: [...prevProduct.images, imageData]
    }));
  };

  const handleImageClear = (index) => {
    setProduct(prevProduct => {
      const newImages = prevProduct.images.filter((_, i) => i !== index);
      return { ...prevProduct, images: newImages };
    });
  };

  const handleProductUpload = async () => {
    const token = localStorage.getItem('authToken'); // 토큰을 가져옵니다

    if (!token) {
      alert('로그인 세션이 만료되었습니다. 다시 로그인해주세요.');
      return;
    }

    const formData = new FormData();
    formData.append('category', product.category);
    formData.append('name', product.name);
    formData.append('price', product.price.toString());
    formData.append('size', product.size);
    formData.append('careGuide', product.careGuide);
    formData.append('stock', product.stock.toString());
    formData.append('description', product.description);
    formData.append('deliveryFee', product.deliveryFee.toString());

    // 이미지 파일 추가
    product.images.forEach((image, index) => {
      if (image instanceof File) {
        formData.append('file', image); // 'file' 키로 설정
      }
    });

    try {
      const response = await fetch('http://13.54.82.156:8080/api/items', {
        method: 'POST',
        headers: {
          'Token': token, // 헤더를 'Token'으로 변경 (서버 요구 사항에 따라 변경)
        },
        body: formData,
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log('상품 등록 응답 데이터:', responseData);
        alert('상품이 성공적으로 등록되었습니다.');
        navigate('/result');
      } else {
        const errorData = await response.json();
        console.error('API Response Error:', errorData);
        throw new Error(errorData.message || '상품 등록에 실패하였습니다.');
      }
    } catch (error) {
      console.error('상품 등록 실패:', error.message);
      alert('상품 등록에 실패하였습니다.');
    }
  };

  return (
    <div className={styles.wrap}>
      <h2>상품등록</h2>

      <ul>
        <li>
          <div className={styles.subTitle}>Category</div>
          <div className={styles.inputWrap}>
            <select name="category" value={product.category} onChange={handleChange}>
              <option value="">선택해주세요</option>
              <option value="New Apparal">New Apparal</option>
              <option value="BAGS">BAGS</option>
              <option value="WALLETS">WALLETS</option>
              <option value="ACCESSORIES">ACCESSORIES</option>
              <option value="SCARVES">SCARVES</option>
              <option value="GLOVES">GLOVES</option>
            </select>
          </div>
        </li>
        <li>
          <div className={styles.subTitle}>Product Name</div>
          <div className={styles.inputWrap}>
            <input type='text' name="name" placeholder='상품이름을 입력해주세요' value={product.name} onChange={handleChange} />
          </div>
        </li>
        <li>
          <div className={styles.subTitle}>Product Images</div>
          <div className={styles.inputWrap}>
            <ImageUploadField className={styles.ImgUpload} onChange={handleImageChange} />
            {product.images.map((image, index) => (
              <ImagePreview
                key={index}
                className={styles.ImgView}
                src={image}
                onClear={() => handleImageClear(index)}
              />
            ))}
          </div>
        </li>
        <li>
          <div className={styles.subTitle}>Product Price</div>
          <div className={styles.inputWrap}>
            <input type='number' name="price" placeholder='숫자만 입력해주세요' value={product.price} onChange={handleChange} />
          </div>
        </li>
        <li>
          <div className={styles.subTitle}>Product Size</div>
          <div className={styles.inputWrap}>
            <input type='text' name="size" value={product.size} onChange={handleChange} />
          </div>
        </li>
        <li>
          <div className={styles.subTitle}>Care Guide</div>
          <div className={styles.inputWrap}>
            <textarea name="careGuide" placeholder='상품 관리 방법에 대해 작성해주세요' value={product.careGuide} onChange={handleChange}></textarea>
          </div>
        </li>
        <li>
          <div className={styles.subTitle}>Description</div>
          <div className={styles.inputWrap}>
            <textarea name="description" placeholder='상품에 대해 설명해주세요' value={product.description} onChange={handleChange}></textarea>
          </div>
        </li>
        <li>
          <div className={styles.subTitle}>Product stock</div>
          <div className={styles.inputWrap}>
            <input type='number' name="stock" value={product.stock} onChange={handleChange} />
          </div>
        </li>
        <li>
          <div className={styles.subTitle}>Delivery Fee</div>
          <div className={styles.inputWrap}>
            <input type='number' name="deliveryFee" value={product.deliveryFee} onChange={handleChange} />
          </div>
        </li>
      </ul>
      <div className={styles.btnWrap}>
        <button className={styles.submitBtn} onClick={handleProductUpload}>등록하기</button>
      </div>
    </div>
  );
};

export default ProductUpload;