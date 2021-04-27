import React from 'react';
import './App.css';
import Counters from './components/counters'
import Header from './components/Header'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <div>
      {/* <Counters /> */}

      {/* Header */}
      <Header />
      <div className="app-body">
        <Sidebar />
      </div>
      {/* SideBar */}
      {/* Chart Panel */}
    </div>
  );
}

export default App;
