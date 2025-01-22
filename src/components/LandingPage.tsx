import React from "react";
import { Shield, Search, BarChart3 } from "lucide-react";

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
        Welcome to SlabShelf
      </h1>
      <p className="text-xl text-gray-600 max-w-2xl mb-12">
        The modern way to organize, track, and showcase your sports card collection
      </p>

      <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
        <div className="p-6 bg-white rounded-lg shadow-md">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
            <Shield className="text-blue-600" size={24} />
          </div>
          <h3 className="text-lg font-semibold mb-2">Secure Storage</h3>
          <p className="text-gray-600">
            Keep your collection safe and organized with our secure cloud storage
          </p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
