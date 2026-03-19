import React, { useContext } from 'react';
import { ItemContext } from '../services/ItemContext';
import ItemCard from '../components/ItemCard';

export default function LostItems() {
  const { items } = useContext(ItemContext);
  const lostItems = items.filter(item => item.type === 'lost');

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Lost Items</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">Help others find their belongings.</p>
        </div>
      </div>
      
      {lostItems.length === 0 ? (
        <div className="bg-white dark:bg-gray-800 rounded-xl p-8 text-center text-gray-500 shadow border border-gray-100 dark:border-gray-700">
          No lost items reported yet.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {lostItems.map(item => (
            <ItemCard key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}
