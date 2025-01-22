import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import Category from './Category';
import AddCategoryForm from './AddCategoryForm';
import { Card, Category as CategoryType } from '../types';

interface DashboardProps {
  categories: CategoryType[];
  onAddCategory: (name: string) => void;
  onAddCard: (categoryId: string, card: Card) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ categories, onAddCategory, onAddCard }) => {
  const [isAddingCategory, setIsAddingCategory] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div className="space-y-1">
          <h2 className="text-2xl font-bold text-gray-900">My Collection</h2>
          <p className="text-gray-500">Manage and organize your sports cards</p>
        </div>
        <button
          onClick={() => setIsAddingCategory(true)}
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Plus size={20} />
          Add Category
        </button>
      </div>

      <div className="relative">
        <input
          type="text"
          placeholder="Search your collection..."
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {isAddingCategory && (
        <AddCategoryForm
          onSubmit={(name) => {
            onAddCategory(name);
            setIsAddingCategory(false);
          }}
          onCancel={() => setIsAddingCategory(false)}
        />
      )}

      <div className="space-y-6">
        {categories.map((category) => (
          <Category
            key={category.id}
            category={category}
            onAddCard={onAddCard}
          />
        ))}

        {categories.length === 0 && (
          <div className="text-center py-12 bg-gray-50 rounded-lg">
            <h3 className="text-lg font-medium text-gray-900">No categories yet</h3>
            <p className="text-gray-500 mt-1">Create a category to start organizing your collection</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;