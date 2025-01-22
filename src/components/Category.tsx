import React, { useState } from 'react';
import { Plus, ChevronDown, ChevronUp } from 'lucide-react';
import CardItem from './CardItem';
import AddCardForm from './AddCardForm';
import { Card, Category as CategoryType } from '../types';

interface CategoryProps {
  category: CategoryType;
  onAddCard: (categoryId: string, card: Card) => void;
}

const Category: React.FC<CategoryProps> = ({ category, onAddCard }) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [isAddingCard, setIsAddingCard] = useState(false);

  return (
    <div className="category-row">
      <div className="category-header">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-1 hover:bg-gray-100 rounded-full"
          >
            {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>
          <h3 className="text-xl font-semibold text-gray-900">{category.name}</h3>
          <span className="text-gray-500 text-sm">({category.cards.length} cards)</span>
        </div>
        <button
          onClick={() => setIsAddingCard(true)}
          className="flex items-center gap-2 px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200 rounded-md transition-colors"
        >
          <Plus size={16} />
          Add Card
        </button>
      </div>

      {isAddingCard && (
        <AddCardForm
          onSubmit={(card) => {
            onAddCard(category.id, card);
            setIsAddingCard(false);
          }}
          onCancel={() => setIsAddingCard(false)}
        />
      )}

      {isExpanded && (
        <div className="card-grid">
          {category.cards.map((card) => (
            <CardItem key={card.id} card={card} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Category;