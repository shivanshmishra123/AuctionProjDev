export const MOCK_AUCTIONS = [
    {
        id: 1,
        title: "Vintage Leica M3 Camera",
        image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=1000",
        currentBid: 1250,
        currency: "USD",
        endTime: Date.now() + 1000 * 60 * 60 * 2, // 2 hours from now
        bids: 14,
        status: "live",
        category: "Electronics"
    },
    {
        id: 2,
        title: "Eames Lounge Chair",
        image: "https://images.unsplash.com/photo-1567538096630-e99482672606?auto=format&fit=crop&q=80&w=1000",
        currentBid: 3400,
        currency: "USD",
        endTime: Date.now() + 1000 * 60 * 45, // 45 mins
        bids: 28,
        status: "live",
        category: "Furniture"
    },
    {
        id: 3,
        title: "Rare Pokémon Card Collection",
        image: "https://images.unsplash.com/photo-1620332352163-56832ad40d04?auto=format&fit=crop&q=80&w=1000",
        currentBid: 850,
        currency: "USD",
        endTime: Date.now() + 1000 * 60 * 5, // 5 mins
        bids: 42,
        status: "closing",
        category: "Collectibles"
    },
    {
        id: 4,
        title: "Cyberpunk Mechanical Keyboard",
        image: "https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&q=80&w=1000",
        currentBid: 299,
        currency: "USD",
        endTime: Date.now() + 1000 * 60 * 60 * 24, // 1 day
        bids: 5,
        status: "live",
        category: "Electronics"
    },
    {
        id: 5,
        title: "Minimalist Smart Watch",
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=1000",
        currentBid: 150,
        currency: "USD",
        endTime: Date.now() + 1000 * 60 * 120, // 2 hours
        bids: 8,
        status: "live",
        category: "Electronics"
    },
    {
        id: 6,
        title: "Abstract Oil Painting",
        image: "https://images.unsplash.com/photo-1579783902614-a3fb39279c0f?auto=format&fit=crop&q=80&w=1000",
        currentBid: 4500,
        currency: "USD",
        endTime: Date.now() + 1000 * 60 * 15, // 15 mins
        bids: 56,
        status: "hot",
        category: "Art"
    }
];

export const CATEGORIES = [
    { id: 'all', label: 'All Items', icon: '🔍' },
    { id: 'electronics', label: 'Electronics', icon: '⚡' },
    { id: 'art', label: 'Art', icon: '🎨' },
    { id: 'vehicles', label: 'Vehicles', icon: '🚗' },
    { id: 'collectibles', label: 'Collectibles', icon: '🏆' },
];
