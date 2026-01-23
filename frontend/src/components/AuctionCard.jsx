import React, { useState, useEffect } from 'react';
import './AuctionCard.css';

const AuctionCard = ({ auction }) => {
    const [timeLeft, setTimeLeft] = useState('');

    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date().getTime();
            const distance = auction.endTime - now;

            if (distance < 0) {
                setTimeLeft('CLOSED');
                clearInterval(timer);
                return;
            }

            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            setTimeLeft(`${hours}h ${minutes}m ${seconds}s`);
        }, 1000);

        return () => clearInterval(timer);
    }, [auction.endTime]);

    return (
        <div className="auction-card">
            <div className="card-image-container">
                <img src={auction.image} alt={auction.title} className="card-image" />
                <div className={`status-badge ${auction.status}`}>
                    {auction.status === 'live' && <span className="pulse-dot"></span>}
                    {auction.status.toUpperCase()}
                </div>
            </div>

            <div className="card-content">
                <h3 className="card-title">{auction.title}</h3>

                <div className="bid-info">
                    <span className="bid-label">Current Bid</span>
                    <span className="bid-amount">{auction.currentBid.toLocaleString()} {auction.currency}</span>
                </div>

                <div className="card-footer">
                    <div className="countdown">
                        <span className="timer-icon">⏱</span>
                        {timeLeft}
                    </div>
                    <button className="bid-button">Place Bid</button>
                </div>
            </div>
        </div>
    );
};

export default AuctionCard;
