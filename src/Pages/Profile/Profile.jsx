// import React from 'react';

const Profile = () => {
    return (
        <div className="bg-gray-100 min-h-screen flex justify-center items-center">
        <div className="bg-white rounded-lg shadow-lg p-6 w-full md:w-3/4 lg:w-2/3 xl:w-1/2">
          <div className="flex items-center justify-center">
            <img
              src="https://via.placeholder.com/200" // Replace with the actual profile picture URL
              alt="Profile"
              className="rounded-full w-32 h-32"
            />
          </div>
          <div className="mt-6 text-center">
            <h2 className="text-2xl font-semibold">Hossain Ahmmed Taufiq</h2>
            <p className="text-gray-600">Email: hossainahmmedtaufiq22@gmail.com</p>
            <p className="text-gray-600">Location: Malibagh,Dhaka</p>
            <p className="text-gray-600">Joined: January 1, 2022</p>
            <p className="text-gray-700 mt-4">
              Bio: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, diam a
              ultricies vehicula, elit nisi fringilla velit, sit amet finibus felis nunc in justo.
            </p>
          </div>
        </div>
      </div>
    );
};

export default Profile;