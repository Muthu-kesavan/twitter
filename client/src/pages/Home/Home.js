import React from 'react'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar';

const Home = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4">
      <div>
      <LeftSidebar />
      </div>
    </div>
  );
};

export default Home;