import React from 'react';
import Navbar from './pages/navbar';
import "./App.css"
import AdminDashboard from './pages/admin';
function App() {
  return (
    <div className="App">
      <div className="section1">
      <Navbar/>
      </div>
      <div className="section2">

      <AdminDashboard/>
      </div>
    </div>
  );
}

export default App;
