import React from 'react';
import CartCard from '../CartCard';

const DummyCartCard: React.FC = () => {
  return (
    <CartCard
      cart={{
        ownerId: 'abc123',
        type: 'delivery',
        storeId: 'Publix#123',
        deliverTime: new Date(),
        orderTime: new Date(),
        itemLimit: Math.floor(Math.random() * 10),
        numPeople: 2,
        maxPeople: 3,
      }}
    />
  );
};

export default DummyCartCard;
