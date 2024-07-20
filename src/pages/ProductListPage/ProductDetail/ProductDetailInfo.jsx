import React, { useEffect } from 'react';
import styles from './ProductDetailInfo.module.scss';
import useAccordion from '../../../hooks/useAccordion';
import AccordionItem from '../../../components/AccordionItem';
import { ImageViewField } from '../../../components/Core';

const ProductDetailInfo = ({ product }) => {
  const { openIndex, toggleHandler } = useAccordion();

  const accordionInfoData = [
    {
      title: 'DELIVERY INFO',
      content: (
        <li>
          <p>배송 방법 : 택배</p>
          <p>배송 지역 : 전국지역</p>
          <p>
            배송 비용 : 조건부 무료 (주문 금액 5만원 미만 3,000원 배송비 발생)
          </p>
          <p>
            배송 기간 : 3~7일
          </p>
          <p>
            배송안내 : 도서 산간 지역은 별도의 추가금액이 발생할 수 있습니다.
          </p>
        </li>
      )
    },
    {
      title: 'EXCHANGE INFO',
      content: (
        <li>
          <p>
            주문 후 7일 이내 (휴일 및 공휴일 제외)
          </p>
          <p>
            주문 금액 5만원 미만 배송비 3,000원 추가
          </p>
          <p>
            반품 및 교환비 6,000원
          </p>
        </li>
      )
    },
    {
      title: 'REFUND INFO',
      content: (
        <li>
          <p>
            환불시 반품 확인여부를 확인한 후 3영업일 이내에 결제 금액을 환불해 드립니다.
          </p>
          <p>
            신용카드로 결제하신 경우는 신용카드 승인을 취소하여 결제 대금이 청구되지 않게 합니다.
          </p>
          <p>
            (단, 신용카드 결제일자에 맞추어 대금이 청구 될수 있으면 이경우 익월 신용카드 대금청구시 카드사에서 환급처리됩니다.)
          </p>
        </li>
      )
    }
  ]

  return (
    <section className={styles.wrap}>
      <div className={styles.imgGroup}>
        {product.files.map((file, id) => (
          <ImageViewField
            key={id}
            className={styles.productImg}
            src={`http://13.54.82.156:8080${file.fileUrl}`}
          />
        ))}
      </div>
      <ul className={styles.infoGroup}>
        {accordionInfoData.map((item, index) => {
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
    </section>
  );
};

export default ProductDetailInfo;