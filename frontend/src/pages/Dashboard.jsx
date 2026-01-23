import React from 'react';
import AuctionCard from '../components/AuctionCard';
import { MOCK_AUCTIONS } from '../data/mockAuctions';
import './Dashboard.css';

const Dashboard = () => {
    return (
        <div className="dashboard-container">
            <div className="dashboard-header">
                <h2 className="page-title">Live Auctions</h2>
                <div className="view-controls">
                    <button className="view-btn active">Grid</button>
                    <button className="view-btn">List</button>
                </div>
            </div>

            <div className="auction-grid">
                {MOCK_AUCTIONS.map(auction => (
                    <AuctionCard key={auction.id} auction={auction} />
                ))}
            </div>
        </div>
    );
};

export default Dashboard;
