import React from 'react';

const Card = ({ title, icon, bgColor }) => (
  <div className={`rounded-xl shadow-md p-6 ${bgColor} text-white`}>
    <div className="text-2xl font-semibold mb-2">{title}</div>
  </div>
);

const Dashboard = () => {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex-1 p-8">
        <h2 className="text-4xl font-bold mb-4">Welcome to Apartment Management System</h2>
        <ul className="list-disc list-inside text-2xl mb-8">
          <li >Manage tenants and their information</li>
          <li>Handle maintenance requests and track progress</li>
          <li>Manage payments and track financial transactions</li>
          <li>Manage apartment details and availability</li>
          <li>Manage user accounts and permissions</li>
        </ul>
      </div>
      <div className="flex-1 p-8 grid grid-rows-3 gap-6">
        <div className="grid grid-cols-2 place-items-center">
          {/* Tenant Management Card */}
          <Card
            title="Tenant Management"
            bgColor="bg-blue-500"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                {/* Add SVG path for Tenant Management */}
              </svg>
            }
          />
          {/* Payment Management Card */}
          <Card
            title="Payment Management"
            bgColor="bg-yellow-500"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                {/* Add SVG path for Payment Management */}
              </svg>
            }
          />
        </div>
        <div className="grid place-items-center">
          {/* Account Card */}
          <Card
            title="Account"
            bgColor="bg-red-500"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                {/* Add SVG path for Account */}
              </svg>
            }
          />
        </div>
        <div className="grid grid-cols-2 place-items-center">
          {/* Maintenance Management Card */}
          <Card
            title="Maintenance Management"
            bgColor="bg-green-500"
            icon={
            <svg
                         xmlns="http://www.w3.org/2000/svg"
                         className="h-16 w-16"
                         viewBox="0 0 20 20"
                         fill="currentColor"
                       >
            {/* Add SVG path for Maintenance Management /}
            </svg>
            }
            />
            {/ Apartment Management Card /}
            <Card
            title="Apartment Management"
            bgColor="bg-indigo-500"
            icon={
            <svg
                         xmlns="http://www.w3.org/2000/svg"
                         className="h-16 w-16"
                         viewBox="0 0 20 20"
                         fill="currentColor"
                       >
            {/ Add SVG path for Apartment Management */}
            </svg>
            }
            />
            <Card
                title="Apartment Management"
                bgColor="bg-indigo-500"
            />

        </div>
    </div> 
  </div>
    );
};
            
export default Dashboard;
