import React from 'react';

import { useSelector } from 'react-redux';

const Total = props => {

  const totalAmount = useSelector(state => state.car.price + state.additionalPrice);
  return (
    <div className="content">
      <h4>Total Amount: ${totalAmount}</h4>
    </div>
  );
};

export default Total;
