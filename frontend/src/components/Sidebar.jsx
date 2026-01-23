import React from 'react';
import { CATEGORIES } from '../data/mockAuctions';
import { LayoutGrid, Zap, Palette, Car, Trophy, Flame, Sparkles, Heart } from 'lucide-react';
import './Sidebar.css';

const ICON_MAP = {
    all: <LayoutGrid size={20} />,
    electronics: <Zap size={20} />,
    art: <Palette size={20} />,
    vehicles: <Car size={20} />,
    collectibles: <Trophy size={20} />
};

const Sidebar = () => {
    return (
        <aside className="sidebar">
            <div className="sidebar-section">
                <h4 className="section-title">Discover</h4>
                <ul className="nav-list">
                    {CATEGORIES.map(cat => (
                        <li key={cat.id} className="nav-item">
                            <a href={`#${cat.id}`} className={cat.id === 'all' ? 'active' : ''}>
                                <span className="nav-icon">{ICON_MAP[cat.id]}</span>
                                {cat.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="sidebar-section">
                <h4 className="section-title">Filters</h4>
                <ul className="nav-list">
                    <li className="nav-item">
                        <a href="#ending-soon">
                            <span className="nav-icon"><Flame size={20} /></span>
                            Ending Soon
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#new">
                            <span className="nav-icon"><Sparkles size={20} /></span>
                            New Arrivals
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#favorites">
                            <span className="nav-icon"><Heart size={20} /></span>
                            Favorites
                        </a>
                    </li>
                </ul>
            </div>
        </aside>
    );
};

export default Sidebar;
