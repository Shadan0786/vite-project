import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import NavTabs from './components/NavTabs';
import FilterSection from './components/FilterSection';
import CarList from './components/CarList';
import MyRentals from './components/MyRentals';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {

  // MUST BE AT THE TOP
  const [user, setUser] = useState(null);

  const [activeTab, setActiveTab] = useState('browse');
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  return (
    <div className='min-h-screen bg-gray-50'>

      <Navbar
        user={user}
        setUser={setUser}
        openLogin={() => {
          setShowSignup(false);  // close signup
          setShowLogin(true);    // open login
        }}
        openSignup={() => {
          setShowLogin(false);   // close login
          setShowSignup(true);   // open signup
        }}
      />

      <NavTabs activeTab={activeTab} setActiveTab={setActiveTab} />

      {activeTab === 'browse' && (
        <>
          <FilterSection />
          <CarList />
        </>
      )}

      {activeTab === 'rentals' && <MyRentals />}

      {showLogin && (
        <Login
          onClose={() => setShowLogin(false)}
          onLoginSuccess={(userdata) => setUser(userdata)}
        />
      )}

      {showSignup && (
        <Signup
          onClose={() => setShowSignup(false)}
          onSignupSuccess={(userdata) => setUser(userdata)}
        />
      )}

    </div>
  );
}

export default App;
