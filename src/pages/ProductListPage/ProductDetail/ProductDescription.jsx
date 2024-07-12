import React, { useCallback, useState } from 'react';
import styles from './ProductDescription.module.scss';
import useAccordion from '../../../hooks/useAccordion';
import AccordionItem from '../../../components/AccordionItem';

const ProductDetailInfo = () => {
  const { openIndex, toggleHandler } = useAccordion();

  const [quantity, setQuantity] = useState(1);
  const [inStock, setInStock] = useState(true);

  const increaseHandler = useCallback(() => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  }, [])

  const decreaseHandler = useCallback(() => {
    setQuantity((prevQuantity) => {
      if (prevQuantity > 1) {
        return prevQuantity - 1;
      } else {
        return prevQuantity;
      }
    });
  }, []);


  const accordionDesData = [
    {
      title: 'Size',
      content: '가로 45 x 높이 23 x 깊이 8cm'
    },
    {
      title: 'Material',
      content: '- Outside 100% Polyurethane / Inside 100% Polyester'
    },
    {
      title: 'Care Guide',
      content: (
        <ol>
          <li>
            <p>
              - 일상적인 관리: 가방의 겉면을 부드럽게 천을 사용해 닦아주세요. 거친 소재는 표면을 손상시킬 수 있습니다. 먼지가 쌓이지 않도록 정기적으로 건조한 천으로 가방을 닦아주세요.
            </p>
            <br />
            <p>
              - 보관: 가방을 사용하지 않을 때는 습기가 없고 통풍이 잘 되는 서늘한 곳에 보관하는 것이 좋습니다. 단 장시간 직사광선에 노출되면 인조가죽이 변색될 수 있으니 직사광선을 피해서 보관해주세요.
            </p>
            <br />
            <p>
              - 또한 가방을 사용하지 않을 때는 내부에 신문지나 부드러운 천을 채워 보관하면 오랫동안 형태를 유지하는데 도움이 됩니다.
            </p>
          </li>
        </ol>
      )
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
      )
    },
  ]


  return (
    <section className={styles.wrap}>
      <div className={styles.inner}>
        <h2 className={styles.title}>
          Split Half Moon Messenger Bag_Dark brown
        </h2>

        <ul className={styles.info1}>
          <li>
            <span className={styles.subTitle}>Price</span>
            <span>119,000원</span>
          </li>
          <li>
            <span className={styles.subTitle}>적립금</span>
            <span>최대 5,950원</span>
          </li>
        </ul>

        <div className={styles.description}>
          핸즈프리로 가볍고 편안하게 착용할 수 있는 스플릿 하프문 메신저백 입니다. 크로스 바디 스타일에 완벽한 핏이 되도록 일반 가죽보다 더 부드럽고 유연한 신세틱 레더를 사용하였고, 조절 가능한 스트랩과 지퍼 디테일로 이루어져 있습니다.
        </div>

        {/* 아코디언 형태 */}
        <ul className={styles.info2}>
          {accordionDesData.map((item, index) => {
            return (
              <AccordionItem
                key={index}
                index={index}
                isOpen={openIndex === index}
                title={item.title}
                onToggle={toggleHandler}
              >
                {item.content}
              </AccordionItem>
            )
          })}
        </ul>

        {inStock ? (
          <div className={styles.productPurchaseWrap}>
            <div className={styles.productCountWrap}>
              <div className={styles.productName}>
                Split Half Moon Messenger Bag_Dark brown
              </div>
              <div className={styles.productCount}>
                <button onClick={decreaseHandler}>-</button>
                <div
                  id='productQuantity'
                  className={styles.productQuantity}
                >{quantity}</div>
                <button onClick={increaseHandler}>+</button>
              </div>
            </div>

            <div className={styles.buttonGroup}>
              <button className={styles.btnBuyNow}>Buy Now</button>
              <button className={styles.btnAddCart}>Add to Cart</button>
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

export default ProductDetailInfo;