// import React from 'react';

const DashBoard = () => {
    return (
        <div className="bg-gray-100 min-h-screen">
      <div className="bg-white p-4 shadow-lg">
        <h1 className="text-2xl font-semibold mb-4">Dashboard</h1>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {/* Dashboard Card 1 */}
          <div className="bg-blue-200 p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-2">Statistics</h2>
            <p className="text-gray-700">Total Users: 100</p>
            <p className="text-gray-700">Revenue: $1,000</p>
            <p className="text-gray-700">Orders: 50</p>
          </div>

          {/* Dashboard Card 2 */}
          <div className="bg-green-200 p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-2">Tasks</h2>
            <p className="text-gray-700">Pending: 5</p>
            <p className="text-gray-700">Completed: 15</p>
            <p className="text-gray-700">Overdue: 3</p>
          </div>

          {/* Dashboard Card 3 */}
          <div className="bg-yellow-200 p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-2">Notifications</h2>
            <p className="text-gray-700">New Messages: 3</p>
            <p className="text-gray-700">Alerts: 2</p>
            <p className="text-gray-700">Reminders: 1</p>
          </div>

          {/* Dashboard Card 4 */}
          <div className="bg-purple-200 p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-2">Recent Activities</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>User registration - John Doe</li>
              <li>Product added - Product A</li>
              <li>Task completed - Task X</li>
              <li>Invoice sent - Invoice #123</li>
            </ul>
          </div>

          {/* Dashboard Card 5 */}
          <div className="bg-pink-200 p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-2">Calendar</h2>
            {/* Add a calendar component here */}
          </div>
        </div>
      </div>
    </div>
  
    );
};

export default DashBoard;