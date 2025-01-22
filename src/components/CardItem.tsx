import React from 'react';
import { Card } from '../types';

interface CardItemProps {
  card: Card;
}

const CardItem: React.FC<CardItemProps> = ({ card }) => {
  return (
    <div className="card-item">
      <div className="relative">
        <img
          src={card.imageUrl || '/api/placeholder/200/250'}
          alt={card.name}
          className="card-image"
        />
        <div className="absolute top-2 right-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded-md text-sm">
          ${card.value.toLocaleString()}
        </div>
      </div>
      <div className="card-details">
        <h4 className="font-medium text-gray-900 truncate">{card.name}</h4>
        <div className="mt-1 space-y-1">
          <p className="text-sm text-gray-500">{card.year} {card.brand}</p>
          <p className="text-sm text-gray-500">{card.sport}</p>
        </div>
      </div>
    </div>
  );
};

export default CardItem;