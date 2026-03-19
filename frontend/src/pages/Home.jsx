import React from 'react';
import { Link } from 'react-router-dom';
import { Search, PlusCircle, User, FileText, CheckCircle } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center py-20 bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 rounded-3xl min-h-[70vh] text-center shadow-lg border border-gray-100 dark:border-gray-800">
      <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 mb-6 drop-shadow-sm">
        Campus Lost & Found
      </h1>
      <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl px-4">
        Easily report lost items or browse through found items to get your belongings back. A simple, modern platform for our college community.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 px-4 w-full justify-center max-w-3xl">
        <Link to="/lost" className="flex items-center justify-center gap-2 flex-1 px-8 py-4 bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-900 rounded-2xl shadow-sm hover:shadow-md hover:bg-blue-50 dark:hover:bg-gray-700 transition-all font-semibold text-lg hover:-translate-y-1">
          <Search size={24} />
          Find Lost Items
        </Link>
        <Link to="/add-item" className="flex items-center justify-center gap-2 flex-1 px-8 py-4 bg-blue-600 text-white rounded-2xl shadow-md hover:shadow-lg hover:bg-blue-700 transition-all font-semibold text-lg hover:-translate-y-1">
          <PlusCircle size={24} />
          Report an Item
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 max-w-5xl px-4">
        <div className="flex flex-col items-center text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
          <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center mb-4 text-blue-600 dark:text-blue-400">
            <User size={32} />
          </div>
          <h3 className="text-xl font-bold mb-2">Create an Account</h3>
          <p className="text-gray-500 dark:text-gray-400">Sign up with your student email to post and claim items securely.</p>
        </div>
        <div className="flex flex-col items-center text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
          <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900/50 rounded-full flex items-center justify-center mb-4 text-indigo-600 dark:text-indigo-400">
            <FileText size={32} />
          </div>
          <h3 className="text-xl font-bold mb-2">Report It</h3>
          <p className="text-gray-500 dark:text-gray-400">Provide details and photos of the item you lost or found on campus.</p>
        </div>
        <div className="flex flex-col items-center text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
          <div className="w-16 h-16 bg-green-100 dark:bg-green-900/50 rounded-full flex items-center justify-center mb-4 text-green-600 dark:text-green-400">
            <CheckCircle size={32} />
          </div>
          <h3 className="text-xl font-bold mb-2">Get it Back</h3>
          <p className="text-gray-500 dark:text-gray-400">Connect through the platform and safely return items to their owners.</p>
        </div>
      </div>
    </div>
  );
}
