import React, { useState } from 'react';
import { X } from 'lucide-react';

interface AddCategoryFormProps {
  onSubmit: (name: string) => void;
  onCancel: () => void;
}

const AddCategoryForm: React.FC<AddCategoryFormProps> = ({ onSubmit, onCancel }) => {
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(name);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-medium">Create New Category</h3>
        <button
          onClick={onCancel}
          className="p-1 hover:bg-gray-100 rounded-full"
        >
          <X size={20} />
        </button>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="space-y-1">
          <label className="text-sm font-medium text-gray-700">Category Name</label>
          <input
            type="text"
            required
            placeholder="e.g., Basketball Rookies, Vintage Baseball"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="flex justify-end gap-3 mt-4">
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
            Create Category
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCategoryForm;