import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import NavTabs from './components/NavTabs';
import FilterSection from './components/FilterSection';
import CarList from './components/CarList';
import MyRentals from './components/MyRentals';

function App() {

  const [activeTab, setActiveTab] = useState('browse');

  return (
    <div className='min-h-screen bg-gray-50'>
      <Navbar />


      <NavTabs activeTab={activeTab} setActiveTab={setActiveTab} />


      {activeTab === 'browse' && (
        <>
          <FilterSection />
          <CarList />
        </>
      )}

      {activeTab === 'rentals' && <MyRentals />}
    </div>
  );
}

export default App;
