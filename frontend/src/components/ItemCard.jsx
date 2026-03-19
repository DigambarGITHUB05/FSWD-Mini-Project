import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Calendar, Tag } from 'lucide-react';

export default function ItemCard({ item }) {
  const isLost = item.type === 'lost';
  
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg border border-gray-100 dark:border-gray-700 transition-all flex flex-col h-full group">
      <div className="relative h-48 overflow-hidden bg-gray-100 dark:bg-gray-700">
        <img 
          src={item.image || "https://images.unsplash.com/photo-1584650589803-519b9dabc555?auto=format&fit=crop&q=80&w=400"} 
          alt={item.title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold shadow-sm ${
            isLost 
              ? 'bg-red-100 text-red-700 dark:bg-red-900/80 dark:text-red-300' 
              : 'bg-green-100 text-green-700 dark:bg-green-900/80 dark:text-green-300'
          }`}>
            {isLost ? 'LOST' : 'FOUND'}
          </span>
        </div>
        {item.claimed && (
          <div className="absolute top-4 right-4 py-1 px-3 bg-gray-800/80 text-white text-xs font-bold rounded-full uppercase tracking-wider backdrop-blur-sm">
            Claimed
          </div>
        )}
      </div>
      
      <div className="p-5 flex-grow flex flex-col">
        <div className="flex items-center gap-2 mb-2 text-xs font-medium text-gray-500 dark:text-gray-400">
          <span className="flex items-center gap-1">
            <Tag size={12} />
            {item.category}
          </span>
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-1">{item.title}</h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2 flex-grow">{item.description}</p>
        
        <div className="space-y-2 mb-6">
          <div className="flex items-start text-sm text-gray-500 dark:text-gray-400">
            <MapPin size={16} className="mr-2 mt-0.5 flex-shrink-0" />
            <span className="line-clamp-1">{item.location}</span>
          </div>
          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
            <Calendar size={16} className="mr-2 flex-shrink-0" />
            <span>{item.date}</span>
          </div>
        </div>
        
        <Link 
          to={`/item/${item.id}`}
          className="mt-auto block w-full py-2.5 text-center bg-gray-50 dark:bg-gray-700/50 hover:bg-blue-50 dark:hover:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-medium rounded-xl transition-colors border border-gray-200 dark:border-gray-600"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
