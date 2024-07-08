import React, { useState } from 'react';

const useAccodion = (initIndex) => {
  const [openIndex, setOpenIndex] = useState(initIndex);
  const toggleHandler = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  }

  return { openIndex, toggleHandler };
};

export default useAccodion;