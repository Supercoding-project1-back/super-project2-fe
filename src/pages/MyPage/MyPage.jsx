import React from 'react';
import { useNavigate } from 'react-router-dom';

const MyPage = () => {
  const navigate = useNavigate();

  const goToProductUpload = () => {
    navigate('/upload');
  };

  return (
    <div>
      <h1>마이페이지입니다.</h1>
      <button onClick={goToProductUpload}>상품 등록 페이지로 이동</button>
    </div>
  );
};

export default MyPage;