import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import LandingPage from "./components/LandingPage";
import Dashboard from "./components/Dashboard";
import AddCard from "./components/AddCardForm";
import AddCategory from "./components/AddCategoryForm";
import CardItem from "./components/CardItem";
import Category from "./components/Category";

// Types
interface Card {
  id: string;
  name: string;
  sport: string;
  year: number;
  brand: string;
  imageUrl: string;
  category: string;
  value: number;
}

interface Category {
  id: string;
  name: string;
  cards: Card[];
}

const App: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const addCategory = (name: string) => {
    const newCategory: Category = {
      id: crypto.randomUUID(),
      name,
      cards: [],
    };
    setCategories([...categories, newCategory]);
  };

  const addCardToCategory = (categoryId: string, card: Card) => {
    setCategories(
      categories.map((category) =>
        category.id === categoryId
          ? { ...category, cards: [...category.cards, card] }
          : category
      )
    );
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-white shadow-lg">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between items-center h-16">
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold text-gray-800">SlabShelf</h1>
              </div>
              <div className="flex items-center">
                {!isAuthenticated ? (
                  <button
                    className="bg-blue-600 text-white px-4 py-2 rounded-md"
                    onClick={() => {
                      /* Implement Google Sign In */
                    }}
                  >
                    Sign in with Google
                  </button>
                ) : (
                  <button
                    className="text-gray-600 hover:text-gray-800"
                    onClick={() => setIsAuthenticated(false)}
                  >
                    Sign Out
                  </button>
                )}
              </div>
            </div>
          </div>
        </nav>

        <main className="max-w-7xl mx-auto px-4 py-8">
          <Routes>
            <Route
              path="/"
              element={
                isAuthenticated ? (
                  <Dashboard
                    categories={categories}
                    onAddCategory={addCategory}
                    onAddCard={addCardToCategory}
                  />
                ) : (
                  <LandingPage />
                )
              }
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
