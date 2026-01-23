import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="logo-section">
                <div className="logo-icon">V</div>
                <h1 className="logo-text">Vel<span className="text-gradient">oAuction</span></h1>
            </div>

            <div className="search-section">
                <input type="text" placeholder="Search for items, collections, or creators..." className="search-input" />
            </div>

            <div className="actions-section">
                <button className="create-btn">
                    <span>+</span> Create Auction
                </button>

                <div className="wallet-pill">
                    <span className="wallet-label">Balance:</span>
                    <span className="wallet-amount">24.5 ETH</span>
                </div>

                <div className="user-profile">
                    <img src="https://ui-avatars.com/api/?name=User+One&background=random" alt="User" className="avatar" />
                </div>
            </div>
        </header>
    );
};

export default Header;
