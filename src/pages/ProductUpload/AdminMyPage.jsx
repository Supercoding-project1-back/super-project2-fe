import React, { useEffect, useState } from 'react';

const AdminMyPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://13.54.82.156:8080/api/items');
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
  }, []);

  return (
    <div className='wrap'>
      <h2>Admin My Page</h2>
      <div className='productList'>
        {products.map(product => (
          <div key={product.id} className="productItem">
            {product.files.length > 0 && (
              <img
                src={`http://localhost:8080/${product.files[0].fileUrl}`}
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