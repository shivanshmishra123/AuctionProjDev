import React from 'react';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import './components/Layout.css'; // Ensure layout styles are applied

function App() {
  return (
    <Layout>
      <Dashboard />
    </Layout>
  );
}

export default App;
