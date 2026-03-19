import React from 'react';

export default function AddItem() {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg p-8 border border-gray-100 dark:border-gray-700">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Report an Item</h1>
        
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">I have...</label>
            <div className="flex gap-4">
              <label className="flex-1 cursor-pointer">
                <input type="radio" name="type" className="peer sr-only" value="lost" defaultChecked />
                <div className="p-4 rounded-xl border-2 border-gray-200 dark:border-gray-700 text-center text-gray-600 dark:text-gray-400 peer-checked:border-blue-500 peer-checked:text-blue-600 dark:peer-checked:text-blue-400 peer-checked:bg-blue-50 dark:peer-checked:bg-blue-900/20 font-medium transition-all">
                  Lost something
                </div>
              </label>
              <label className="flex-1 cursor-pointer">
                <input type="radio" name="type" className="peer sr-only" value="found" />
                <div className="p-4 rounded-xl border-2 border-gray-200 dark:border-gray-700 text-center text-gray-600 dark:text-gray-400 peer-checked:border-green-500 peer-checked:text-green-600 dark:peer-checked:text-green-400 peer-checked:bg-green-50 dark:peer-checked:bg-green-900/20 font-medium transition-all">
                  Found something
                </div>
              </label>
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Item Title</label>
            <input type="text" className="w-full rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-4 py-3 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 shadow-sm transition-all" placeholder="e.g. Black Wallet, Keys, Hydroflask" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Category</label>
                <select className="w-full rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-4 py-3 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 shadow-sm transition-all">
                  <option>Electronics</option>
                  <option>Wallets</option>
                  <option>Keys</option>
                  <option>Books</option>
                  <option>Accessories</option>
                  <option>Other</option>
                </select>
             </div>
             <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Date (Lost/Found)</label>
                <input type="date" className="w-full rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-4 py-3 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 shadow-sm transition-all" />
             </div>
          </div>

           <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Location</label>
            <input type="text" className="w-full rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-4 py-3 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 shadow-sm transition-all" placeholder="e.g. Library 2nd Floor" />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Description</label>
            <textarea rows="4" className="w-full rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-4 py-3 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 shadow-sm transition-all resize-none" placeholder="Provide any identifying details..." />
          </div>

          <div className="pt-4">
            <button type="submit" className="w-full rounded-xl bg-blue-600 px-8 py-4 text-white font-semibold shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all">
              Submit Report
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
