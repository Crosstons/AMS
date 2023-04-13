import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="h-screen w-84 bg-gray-100 p-6 space-y-4">
      <h1 className="text-xl font-semibold">Apartment Management System</h1>
      <nav className="space-y-2">
      <NavLink
          to="/"
          activeClassName="bg-blue-500 text-white"
          className="block px-4 py-2 rounded-lg"
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/tenant-management"
          activeClassName="bg-blue-500 text-white"
          className="block px-4 py-2 rounded-lg"
        >
          Tenant Management
        </NavLink>
        <NavLink
          to="/maintenance-management"
          activeClassName="bg-blue-500 text-white"
          className="block px-4 py-2 rounded-lg"
        >
          Maintenance Management
        </NavLink>
        <NavLink
          to="/payment-management"
          activeClassName="bg-blue-500 text-white"
          className="block px-4 py-2 rounded-lg"
        >
          Payment Management
        </NavLink>
        <NavLink
          to="/apartment-management"
          activeClassName="bg-blue-500 text-white"
          className="block px-4 py-2 rounded-lg"
        >
          Apartment Management
        </NavLink>
        <NavLink
          to="/account"
          activeClassName="bg-blue-500 text-white"
          className="block px-4 py-2 rounded-lg"
        >
          Account
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
