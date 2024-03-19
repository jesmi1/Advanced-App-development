import React from 'react';

const UserDashboard = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-4">User Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-2">Menu</h2>
          <div className="flex flex-col gap-4">
           
              <div className="flex items-center gap-2">
               
                <div>
                  <h3 className="text-lg font-semibold">Birthday party</h3>
                  <p className="text-gray-600">Order Date: January 1, 2024</p>
                  <p className="text-gray-600">Price: $499</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
               
                <div>
                  <h3 className="text-lg font-semibold">Clock</h3>
                  <p className="text-gray-600">Order Date: January 10, 2024</p>
                  <p className="text-gray-600">Price: $30</p>
                </div>
              </div>
          
              <div className="flex items-center gap-2">
                
                <div>
                  <h3 className="text-lg font-semibold">Pen</h3>
                  <p className="text-gray-600">Order Date: January 20, 2024</p>
                  <p className="text-gray-600">Price: $40</p>
                </div>
              </div>
          
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-2">Account Information</h2>
          <div className="divide-y divide-gray-200">
            <div className="account-item p-4 hover:bg-blue-100 transition duration-300">
              <p className="text-gray-600">Username: Ram</p>
              <p className="text-gray-600">Email: Ram@gmail.com</p>
              <p className="text-gray-600">Membership: Premium</p>
            </div>
            <hr className="my-4" />
            <div className="account-item p-4 hover:bg-blue-100 transition duration-300">
              <p className="text-gray-600">Username: Radha</p>
              <p className="text-gray-600">Email: Radha@gmail.com</p>
              <p className="text-gray-600">Membership: Premium</p>
            </div>
            <hr className="my-4" />
            <div className="account-item p-4 hover:bg-blue-100 transition duration-300">
              <p className="text-gray-600">Username: Daisy</p>
              <p className="text-gray-600">Email: Daisy@gmail.com</p>
              <p className="text-gray-600">Membership: Premium</p>
            </div>
            <hr className="my-4" />
          </div>
        </div>


        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-2">Settings</h2>
          <div>
            <p className="text-gray-600">Notifications: On</p>
            <p className="text-gray-600"></p>
            <p className="text-gray-600">Language: English</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
