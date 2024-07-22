import React, { useCallback, useEffect, useState } from 'react';
import styles from './ProductDescription.module.scss';
import useAccordion from '../../../hooks/useAccordion';
import AccordionItem from '../../../components/AccordionItem';
import { useNavigate } from 'react-router-dom';

const ProductDescription = ({ product }) => {
  const { openIndex, toggleHandler } = useAccordion();
  const navigate = useNavigate();

  // product가 정의되지 않은 경우 기본값을 설정
  const [quantity, setQuantity] = useState(1);
  const [inStock, setInStock] = useState(false);

  // product가 정의되었는지 확인
  useEffect(() => {
    if (product) {
      setInStock(product.count > 0);
      if (product.count === 0) {
        setQuantity(0);
      }
    }
  }, [product]);

  const increaseHandler = useCallback(() => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  }, []);

  const decreaseHandler = useCallback(() => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : prevQuantity));
  }, []);

  const accordionDesData = [
    {
      title: 'Size',
      content: product ? product.size : '정보 없음',
    },
    {
      title: 'Material',
      content: '- Outside 100% Polyurethane / Inside 100% Polyester',
    },
    {
      title: 'Care Guide',
      content: product ? (
        <ol>
          <li>
            <p>{product.careGuide}</p>
          </li>
        </ol>
      ) : (
        '정보 없음'
      ),
    },
    {
      title: 'Shipping Info',
      content: (
        <ol>
          <li>
            <p>배송 방법 : 택배</p>
            <p>배송 지역 : 전국지역</p>
            <p>배송 비용 : 조건부 무료 (주문 금액 5만원 미만 3,000원 배송비 발생)</p>
            <p>배송 기간 : 3~7일</p>
            <p>배송안내 : 도서 산간 지역은 별도의 추가금액이 발생할 수 있습니다.</p>
          </li>
        </ol>
      ),
    },
  ];

  const navigateToBasket = () => {
    navigate(`/basket`);
  };

  const navigateToPayment = () => {
    navigate(`/payment`);
  };

  return (
    <section className={styles.wrap}>
      <div className={styles.inner}>
        <h2 className={styles.title}>{product ? product.name : '상품 이름'}</h2>

        <ul className={styles.info1}>
          <li>
            <span className={styles.subTitle}>Price</span>
            <span>{product ? `${product.price} 원` : '정보 없음'}</span>
          </li>
          <li>
            <span className={styles.subTitle}>적립금</span>
            <span>최대 5,950원</span>
          </li>
        </ul>

        <div className={styles.description}>
          {product ? product.description : '상품 설명'}
        </div>

        <ul className={styles.info2}>
          {accordionDesData.map((item, index) => (
            <AccordionItem
              key={index}
              index={index}
              isOpen={openIndex === index}
              title={item.title}
              onToggle={toggleHandler}
            >
              {item.content}
            </AccordionItem>
          ))}
        </ul>

        {inStock ? (
          <div className={styles.productPurchaseWrap}>
            <div className={styles.productCountWrap}>
              <div className={styles.productName}>{product ? product.name : '상품 이름'}</div>
              <div className={styles.productCount}>
                <button onClick={decreaseHandler}>-</button>
                <div id="productQuantity" className={styles.productQuantity}>
                  {quantity}
                </div>
                <button onClick={increaseHandler}>+</button>
              </div>
            </div>

            <div className={styles.buttonGroup}>
              <button className={styles.btnBuyNow} onClick={navigateToPayment}>
                Buy Now
              </button>
              <button className={styles.btnAddCart} onClick={navigateToBasket}>
                Add to Cart
              </button>
            </div>
          </div>
        ) : (
          <div className={styles.soldOutMsg}>
            <p>현재 해당 상품 재고가 없습니다.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductDescription;