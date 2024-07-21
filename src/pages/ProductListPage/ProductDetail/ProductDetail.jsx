import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './ProductDetail.module.scss';
import ProductDetailInfo from './ProductDetailInfo';
import ProductDescription from './ProductDescription';

const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    console.log('Product ID:', productId); // productId 값 확인
    const fetchData = async () => {
      try {
        const response = await fetch(`http://13.54.82.156:8080/api/items/${productId}`, {
          method: 'GET',
          cache: 'no-cache',
        });
        if (!response.ok) {
          throw new Error("데이터를 불러오는 데에 실패했습니다!");
        }
        const data = await response.json(); // JSON 형식으로 변환
        console.log('데이터 가져오는지 확인', data); // 데이터가 제대로 오는지 확인
        setProduct(data);
      } catch (error) {
        console.error('에러!!!!!', error);
      }
    }
    fetchData(); // fetchData 함수 호출
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrap}>
        <ProductDetailInfo product={product} />
        <ProductDescription product={product} />
      </div>
    </div>
  );
};

export default ProductDetail;