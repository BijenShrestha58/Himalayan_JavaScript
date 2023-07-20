
import React from 'react';
import Sidebar from './sidebar';
import MainContent from './adminComponent';

import './admin.scss';


const AdminPanel = () => {
  return (
    <div className="admin-panel">
      <Sidebar />
      <MainContent />
  
      
    </div>
  );
};

export default AdminPanel;