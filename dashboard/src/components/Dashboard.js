import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Apps from './Apps';
import Funds from './Funds';
import Holdings from './Holdings';
import Orders from './Orders';
import Summary from './Summary';
import Positions from './Position';
import WatchList from './WatchList';
import { GeneralContextProvider } from './GeneralContext';

const Dashboard = () => {
    return (
        <div className="dashboard-container">
          <GeneralContextProvider>
            <WatchList />
            <div className="content">
              <Routes>
                <Route path="/dashboard" element={<Summary />} />
                <Route path="/dashboard/orders" element={<Orders />} />
                <Route path="/dashboard/holdings" element={<Holdings />} />
                <Route path="/dashboard/positions" element={<Positions />} />
                <Route path="/dashboard/funds" element={<Funds />} />
                <Route path="/dashboard/apps" element={<Apps />} />
                <Route path="/" element={<Summary />} />
              </Routes>
            </div>
          </GeneralContextProvider>
        </div>
      );
    };
    
    export default Dashboard;