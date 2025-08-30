import React, { useState } from 'react';

const ClientDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <div className="dashboard-header mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Welcome, Client!</h1>
          <p className="text-gray-600">Your personalized blog management dashboard.</p>
        </div>

        <div className="dashboard-stats grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="stat-card p-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-2">Total Revenue</h2>
            <p className="text-3xl font-bold text-green-600">$278.45</p>
          </div>
          <div className="stat-card p-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-2">Monthly Visitors</h2>
            <p className="text-3xl font-bold text-blue-600">2,733</p>
          </div>
          <div className="stat-card p-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-2">Email Subscribers</h2>
            <p className="text-3xl font-bold text-purple-600">127</p>
          </div>
        </div>

        <div className="dashboard-tabs">
          <div className="flex border-b border-gray-200 mb-6">
            <button
              className={`tab-button ${activeTab === 'overview' ? 'active' : ''}`}
              onClick={() => setActiveTab('overview')}
            >
              Overview
            </button>
            <button
              className={`tab-button ${activeTab === 'posts' ? 'active' : ''}`}
              onClick={() => setActiveTab('posts')}
            >
              Posts
            </button>
            <button
              className={`tab-button ${activeTab === 'email' ? 'active' : ''}`}
              onClick={() => setActiveTab('email')}
            >
              Email Marketing
            </button>
            <button
              className={`tab-button ${activeTab === 'settings' ? 'active' : ''}`}
              onClick={() => setActiveTab('settings')}
            >
              Settings
            </button>
          </div>

          <div>
            {activeTab === 'overview' && (
              <div>
                <h3 className="text-2xl font-bold mb-4">Overview</h3>
                <p>Detailed analytics and quick insights will be displayed here.</p>
              </div>
            )}
            {activeTab === 'posts' && (
              <div>
                <h3 className="text-2xl font-bold mb-4">Your Blog Posts</h3>
                <ul className="list-disc pl-5 text-gray-700">
                  <li>Post Title 1 - Published (Aug 2025)</li>
                  <li>Post Title 2 - Published (Jul 2025)</li>
                  <li>Post Title 3 - Draft (Pending Review)</li>
                </ul>
              </div>
            )}
            {activeTab === 'email' && (
              <div>
                <h3 className="text-2xl font-bold mb-4">Email Marketing</h3>
                <p>Manage your subscriber list and send broadcasts.</p>
                <button className="bg-blue-600 text-white px-4 py-2 rounded mt-4">Send New Broadcast</button>
              </div>
            )}
            {activeTab === 'settings' && (
              <div>
                <h3 className="text-2xl font-bold mb-4">Settings</h3>
                <p>Customize your blog's appearance and integrate products.</p>
                <input type="text" placeholder="Product Link (for affiliate)" className="border p-2 w-full mt-4" />
                <button className="bg-blue-600 text-white px-4 py-2 rounded mt-4">Save Settings</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientDashboard;


