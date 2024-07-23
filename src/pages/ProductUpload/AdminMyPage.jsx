import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const AdminMyPage = () => {
  const location = useLocation();
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState(null); // 새로 추가된 상품 상태

  useEffect(() => {
    // URL 쿼리 파라미터에서 상품 정보를 가져옴
    if (location.state && location.state.product) {
      setNewProduct(location.state.product);
    }

    const fetchProducts = async () => {
      const token = localStorage.getItem('authToken'); // 토큰을 가져옵니다
      try {
        const response = await fetch('http://13.54.82.156:8080/api/items', {
          headers: {
            'Token': token,
          },
        });
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        if (!Array.isArray(data.content)) {
          throw new Error('Products data is not an array');
        }
        setProducts(data.content);
      } catch (error) {
        console.error('Failed to fetch products:', error.message);
        setProducts([]); // 빈 배열로 초기화
      }
    };

    fetchProducts();
  }, [location.state]);

  return (
    <div className='wrap'>
      <h2>Admin My Page</h2>
      {newProduct && (
        <div className="newProduct">
          <h3>새로 등록된 상품</h3>
          <div>{newProduct.name}</div>
          <div>{newProduct.category}</div>
          <div>{newProduct.price}</div>
          <div>{newProduct.size}</div>
          <div>{newProduct.careGuide}</div>
          <div>{newProduct.count}</div>
          <div>{newProduct.description}</div>
          <div>{newProduct.deliveryFee}</div>
        </div>
      )}
      <div className='productList'>
        {products.map(product => (
          <div key={product.id} className="productItem">
            {product.files.length > 0 && (
              <img
                src={`${process.env.REACT_APP_API_URL}${product.files[0].fileUrl}`}
                alt={product.name}
              />
            )}
            <div>{product.name}</div>
            <div>{product.category}</div>
            <div>{product.price}</div>
            <div>{product.size}</div>
            <div>{product.careGuide}</div>
            <div>{product.count}</div>
            <div>{product.description}</div>
            <div>{product.deliveryFee}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminMyPage;