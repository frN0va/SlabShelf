export interface Card {
    id: string;
    name: string;
    sport: string;
    year: number;
    brand: string;
    imageUrl: string;
    value: number;
  }
  
  export interface Category {
    id: string;
    name: string;
    cards: Card[];
  }