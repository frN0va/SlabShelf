import React from 'react';
import { Database, Search, BarChart3, Shield, Share2, Image, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  const handleProfileClick = () => {
    navigate('/ProfilePage.tsx');
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white relative">
      <div className="absolute top-4 right-4 cursor-pointer" onClick={handleProfileClick}>
        <User className="text-white" size={32} />
      </div>
      <div className="w-full">
        {/* Hero Section */}
        <div className="max-w-6xl mx-auto px-4 pt-24 pb-16">
          <div className="text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Welcome to SlabShelf
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              The modern way to organize, track, and showcase your sports card collection
            </p>
            <button className="mt-8 px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-lg font-medium transition-colors">
              Get Started with Google
            </button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Database className="text-blue-400" size={24} />}
              title="Organized Collection"
              description="Create custom categories and easily manage your entire sports card collection in one place"
              color="blue"
            />
            <FeatureCard
              icon={<Image className="text-purple-400" size={24} />}
              title="Visual Gallery"
              description="Upload high-quality images and showcase your cards in a beautiful, responsive gallery"
              color="purple"
            />
            <FeatureCard
              icon={<Search className="text-cyan-400" size={24} />}
              title="Smart Search"
              description="Quickly find cards using powerful search and filter options across your collection"
              color="cyan"
            />
            <FeatureCard
              icon={<BarChart3 className="text-green-400" size={24} />}
              title="Collection Stats"
              description="Track your collection's value and growth with detailed analytics and insights"
              color="green"
            />
            <FeatureCard
              icon={<Shield className="text-yellow-400" size={24} />}
              title="Secure Storage"
              description="Keep your collection data safe with our secure cloud storage and backup systems"
              color="yellow"
            />
            <FeatureCard
              icon={<Share2 className="text-pink-400" size={24} />}
              title="Easy Sharing"
              description="Share your collection or specific cards with other collectors and enthusiasts"
              color="pink"
            />
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gray-800 w-full py-16">
          <div className="max-w-3xl mx-auto text-center px-4">
            <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Ready to organize your collection?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Join thousands of collectors who trust SlabShelf to manage and showcase their valuable sports cards.
            </p>
            <button className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-lg font-medium transition-colors">
              Start Your Collection Now
            </button>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-gray-800 text-gray-400 text-center py-4 mt-8">
          <p className="text-sm">© {new Date().getFullYear()} Owen Perry and Connor Sample. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

const FeatureCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}> = ({ icon, title, description, color }) => (
  <div className="p-6 rounded-xl bg-gray-800 hover:bg-gray-750 transition-colors">
    <div className={`w-12 h-12 bg-${color}-500 bg-opacity-20 rounded-lg flex items-center justify-center mb-4 mx-auto`}>
      {icon}
    </div>
    <h3 className={`text-lg font-semibold mb-2 text-center text-${color}-400`}>{title}</h3>
    <p className="text-gray-400 text-center">{description}</p>
  </div>
);

export default LandingPage;