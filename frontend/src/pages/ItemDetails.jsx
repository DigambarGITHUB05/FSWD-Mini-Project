import React, { useContext } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, MapPin, Calendar, Tag, User, Phone, Mail } from 'lucide-react';
import { ItemContext } from '../services/ItemContext';

export default function ItemDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { items } = useContext(ItemContext);
  
  const item = items.find(i => i.id === Number(id));

  if (!item) {
    return (
      <div className="max-w-4xl mx-auto py-20 text-center">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Item not found</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8">The item you are looking for doesn't exist or has been removed.</p>
        <button onClick={() => navigate('/')} className="px-6 py-2 bg-blue-600 text-white rounded-xl font-medium shadow-sm hover:bg-blue-700 transition-colors">
          Go Back Home
        </button>
      </div>
    );
  }

  const isLost = item.type === 'lost';

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <button onClick={() => navigate(-1)} className="inline-flex items-center text-sm text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors">
        <ArrowLeft size={16} className="mr-1" />
        Back
      </button>

      <div className="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-700">
        <div className="h-72 lg:h-96 relative bg-gray-100 dark:bg-gray-700">
          <img 
            src={item.image || "https://images.unsplash.com/photo-1584650589803-519b9dabc555?auto=format&fit=crop&q=80&w=400"} 
            alt={item.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute top-6 left-6 flex gap-2">
             <span className={`px-4 py-1.5 rounded-full text-sm font-bold shadow-md tracking-wide ${
              isLost 
                ? 'bg-red-100 text-red-800 dark:bg-red-900/90 dark:text-red-300' 
                : 'bg-green-100 text-green-800 dark:bg-green-900/90 dark:text-green-300'
            }`}>
              {isLost ? 'LOST ITEM' : 'FOUND ITEM'}
            </span>
          </div>
          {item.claimed && (
            <div className="absolute top-6 right-6 py-1.5 px-4 bg-gray-900/80 text-white text-sm font-bold rounded-full uppercase tracking-wider backdrop-blur-sm border border-gray-700">
              Claimed!
            </div>
          )}
        </div>
        
        <div className="p-8 lg:p-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-600">
              <Tag size={12} className="mr-1.5" />
              {item.category}
            </span>
            <span className="text-gray-400 text-sm font-medium">ID: #{item.id}</span>
          </div>
          
          <h1 className="text-3xl lg:text-4xl font-extrabold text-gray-900 dark:text-white mb-6">
            {item.title}
          </h1>
          
          <div className="prose dark:prose-invert max-w-none text-gray-600 dark:text-gray-300 mb-10 leading-relaxed text-lg">
            <p>{item.description}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-gray-50 dark:bg-gray-900/50 p-6 rounded-2xl mb-10 border border-gray-100 dark:border-gray-800">
            <div className="flex items-start gap-4">
               <div className="p-3 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-xl">
                 <Calendar size={24} />
               </div>
               <div>
                  <p className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">Date {isLost ? 'Lost' : 'Found'}</p>
                  <p className="text-base font-medium text-gray-900 dark:text-white">{item.date}</p>
               </div>
            </div>
            <div className="flex items-start gap-4">
               <div className="p-3 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-xl">
                 <MapPin size={24} />
               </div>
               <div>
                  <p className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">Location</p>
                  <p className="text-base font-medium text-gray-900 dark:text-white">{item.location}</p>
               </div>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <User size={20} className="mr-2 text-gray-400" />
              Contact Information
            </h3>
            
            <div className="flex flex-col sm:flex-row gap-4">
              {item.contactEmail && (
                <a href={`mailto:${item.contactEmail}`} className="flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-xl font-semibold shadow-md transition-all hover:-translate-y-0.5 group">
                  <Mail size={20} className="group-hover:scale-110 transition-transform" />
                  Email Reporter
                </a>
              )}
              {item.contactPhone && (
                <a href={`tel:${item.contactPhone}`} className="flex-1 flex items-center justify-center gap-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 border-2 border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-blue-500 dark:hover:border-blue-400 px-6 py-4 rounded-xl font-semibold shadow-sm transition-all hover:-translate-y-0.5 group">
                  <Phone size={20} className="group-hover:scale-110 transition-transform text-gray-400 group-hover:text-blue-500" />
                  Call Reporter
                </a>
              )}
            </div>
            
            <p className="text-xs text-center text-gray-500 mt-6 dark:text-gray-400">
              Please be respectful when contacting users. This platform is for campus community use only.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
