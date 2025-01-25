import React from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Database, Image, Search, BarChart3, Shield, Share2 } from 'lucide-react';

const ProfilePage: React.FC = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white relative">
      <div className="absolute top-4 left-4 cursor-pointer" onClick={handleBackClick}>
        <User className="text-white" size={32} />
      </div>
      <div className="max-w-3xl mx-auto px-4 pt-24 pb-16">
        <div className="flex flex-col items-center">
          <img
            src="/api/placeholder/200/200"
            alt="Profile Picture"
            className="rounded-full w-32 h-32 mb-6"
          />
          <h1 className="text-4xl font-bold mb-2">John Doe</h1>
          <p className="text-gray-300 mb-8">Sports Card Collector</p>
          <div className="grid md:grid-cols-3 gap-8 w-full">
            <div className="p-6 rounded-xl bg-gray-800 hover:bg-gray-750 transition-colors">
              <div className="w-12 h-12 bg-blue-500 bg-opacity-20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Database className="text-blue-400" size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-center text-blue-400">
                Collection
              </h3>
              <p className="text-gray-400 text-center">
                Manage and showcase your sports card collection
              </p>
            </div>
            <div className="p-6 rounded-xl bg-gray-800 hover:bg-gray-750 transition-colors">
              <div className="w-12 h-12 bg-purple-500 bg-opacity-20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Image className="text-purple-400" size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-center text-purple-400">
                Gallery
              </h3>
              <p className="text-gray-400 text-center">
                View and share your card collection
              </p>
            </div>
            <div className="p-6 rounded-xl bg-gray-800 hover:bg-gray-750 transition-colors">
              <div className="w-12 h-12 bg-cyan-500 bg-opacity-20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Search className="text-cyan-400" size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-center text-cyan-400">
                Search
              </h3>
              <p className="text-gray-400 text-center">
                Find cards in your collection
              </p>
            </div>
            <div className="p-6 rounded-xl bg-gray-800 hover:bg-gray-750 transition-colors">
              <div className="w-12 h-12 bg-green-500 bg-opacity-20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <BarChart3 className="text-green-400" size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-center text-green-400">
                Analytics
              </h3>
              <p className="text-gray-400 text-center">
                Track your collection's value and growth
              </p>
            </div>
            <div className="p-6 rounded-xl bg-gray-800 hover:bg-gray-750 transition-colors">
              <div className="w-12 h-12 bg-yellow-500 bg-opacity-20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Shield className="text-yellow-400" size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-center text-yellow-400">
                Security
              </h3>
              <p className="text-gray-400 text-center">
                Secure storage for your collection data
              </p>
            </div>
            <div className="p-6 rounded-xl bg-gray-800 hover:bg-gray-750 transition-colors">
              <div className="w-12 h-12 bg-pink-500 bg-opacity-20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Share2 className="text-pink-400" size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-center text-pink-400">
                Sharing
              </h3>
              <p className="text-gray-400 text-center">
                Share your collection with others
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;