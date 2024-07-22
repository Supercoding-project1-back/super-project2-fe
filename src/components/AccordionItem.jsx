import React from 'react';
import styles from './AccordionItem.module.scss'

const AccordionItem = React.memo(({ index, isOpen, title, onToggle, children }) => {
  return (
    <li>
      <span
        className={styles.subTitle}
        onClick={() => onToggle(index)}
      >
        {title}
      </span>
      {isOpen && <div className={styles.subTitleContent}>{children}</div>}
    </li>
  );
});

export default AccordionItem;