import React, { createContext, useState, useEffect } from 'react';
import { dummyItems } from './mockData';

export const ItemContext = createContext();

export const ItemProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Simulate fetching data
    setItems(dummyItems);
  }, []);

  const addItem = (newItem) => {
    setItems((prev) => [{ ...newItem, id: Date.now() }, ...prev]);
  };

  const markAsClaimed = (id) => {
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, claimed: true } : item))
    );
  };

  return (
    <ItemContext.Provider value={{ items, addItem, markAsClaimed }}>
      {children}
    </ItemContext.Provider>
  );
};
