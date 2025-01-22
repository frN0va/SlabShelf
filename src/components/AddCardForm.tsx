import React, { useState } from 'react';
import { X } from 'lucide-react';
import { Card } from '../types';

interface AddCardFormProps {
  onSubmit: (card: Card) => void;
  onCancel: () => void;
}

const AddCardForm: React.FC<AddCardFormProps> = ({ onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    name: '',
    sport: '',
    year: new Date().getFullYear(),
    brand: '',
    value: 0,
    imageUrl: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      id: crypto.randomUUID(),
      ...formData
    });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-medium">Add New Card</h3>
        <button
          onClick={onCancel}
          className="p-1 hover:bg-gray-100 rounded-full"
        >
          <X size={20} />
        </button>
      </div>

      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
        <div className="space-y-1">
          <label className="text-sm font-medium text-gray-700">Card Name</label>
          <input
            type="text"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>

        <div className="space-y-1">
          <label className="text-sm font-medium text-gray-700">Sport</label>
          <input
            type="text"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            value={formData.sport}
            onChange={(e) => setFormData({ ...formData, sport: e.target.value })}
          />
        </div>

        <div className="space-y-1">
          <label className="text-sm font-medium text-gray-700">Year</label>
          <input
            type="number"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            value={formData.year}
            onChange={(e) => setFormData({ ...formData, year: Number(e.target.value) })}
          />
        </div>

        <div className="space-y-1">
          <label className="text-sm font-medium text-gray-700">Brand</label>
          <input
            type="text"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            value={formData.brand}
            onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
          />
        </div>

        <div className="space-y-1">
          <label className="text-sm font-medium text-gray-700">Value ($)</label>
          <input
            type="number"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            value={formData.value}
            onChange={(e) => setFormData({ ...formData, value: Number(e.target.value) })}
          />
        </div>

        <div className="space-y-1">
          <label className="text-sm font-medium text-gray-700">Image URL</label>
          <input
            type="url"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            value={formData.imageUrl}
            onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
          />
        </div>

        <div className="col-span-2 flex justify-end gap-3 mt-4">
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-md"
          >
            Add Card
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCardForm;