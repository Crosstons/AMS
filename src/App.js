import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Tenant from '../src/Components/Tenant';
import Maintenance from '../src/Components/Maintenance';
import Sidebar from '../src/Components/Sidebar';
import Navbar from './Components/Navbar';
import Dashboard from './Views/Dashboard';
import Payment from './Components/Payment';
import Apartment from './Components/Apartment';
import Account from './Components/Account';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-8">
          <Routes>
          <Route path="/" element={<Dashboard />} />
            <Route path="/tenant-management" element={<Tenant />} />
            <Route path="/maintenance-management" element={<Maintenance />} />
            <Route path="/payment-management" element={<Payment />} />
            <Route path="/apartment-management" element={<Apartment />} />
            <Route path="/account" element={<Account />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
