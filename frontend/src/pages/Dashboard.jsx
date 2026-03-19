import React from 'react';

export default function Dashboard() {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
      <p className="text-gray-600 dark:text-gray-400">Manage your reported lost and found items here.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow border border-gray-100 dark:border-gray-700">
          <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">My Reports</h2>
          <div className="py-8 text-center text-gray-500">
            No items reported yet.
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow border border-gray-100 dark:border-gray-700">
          <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Account Settings</h2>
          <div className="space-y-4">
             <div className="flex justify-between items-center border-b pb-4 dark:border-gray-700">
                <span className="text-gray-600 dark:text-gray-400">Name</span>
                <span className="font-medium text-gray-900 dark:text-white">Student User</span>
             </div>
             <div className="flex justify-between items-center border-b pb-4 dark:border-gray-700">
                <span className="text-gray-600 dark:text-gray-400">Email</span>
                <span className="font-medium text-gray-900 dark:text-white">student@college.edu</span>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
