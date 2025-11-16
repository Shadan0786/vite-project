import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import NavTabs from "./components/NavTabs";
import FilterSection from "./components/FilterSection";
import CarList from "./components/CarList";
import MyRentals from "./components/MyRentals";
import Login from "./components/Login";
import Signup from "./components/Signup";
import RentModal from "./components/RentModal";

function App() {
  const [activeTab, setActiveTab] = useState("browse");
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [user, setUser] = useState(null);
  const [selectedCar, setSelectedCar] = useState(null);
  const [showRentModal, setShowRentModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");
    if (token && userId) {
      setIsLoggedIn(true);
      setUser({ id: userId }); 
    }
  }, []);

 
  const handleRentClick = (car) => {
    if (!isLoggedIn) {
      setShowLogin(true);
      return;
    }

    setSelectedCar(car);
    setShowRentModal(true);
  };

 
  const handleLoginSuccess = (token) => {
    const decoded = JSON.parse(atob(token.split(".")[1])); 

    localStorage.setItem("token", token);
    localStorage.setItem("userId", decoded.id);

    setUser({ id: decoded.id });
    setIsLoggedIn(true);
    setShowLogin(false);
  };


  const handleSignupSuccess = (userData) => {
    setUser(userData);
    setIsLoggedIn(true);
    setShowSignup(false);
  };

  const handleLogout = () => {

  localStorage.removeItem("token");
  localStorage.removeItem("userId");


  setIsLoggedIn(false);
  setUser(null);
};




  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar
        user={user}
        setUser={setUser}
        openLogin={() => {
          setShowSignup(false);
          setShowLogin(true);
        }}
        openSignup={() => {
          setShowLogin(false);
          setShowSignup(true);
        }}
        onLogout={handleLogout}
      />

      <NavTabs activeTab={activeTab} setActiveTab={setActiveTab} />

   
      {activeTab === "browse" && (
        <>
          <FilterSection />
          <CarList onRentClick={handleRentClick} />
        </>
      )}

      {activeTab === "rentals" && <MyRentals />}

     
      {showLogin && (
        <Login
          onClose={() => setShowLogin(false)}
          onLoginSuccess={handleLoginSuccess}
          openSignup={() => {
            setShowLogin(false);
            setShowSignup(true);
          }}
        />
      )}

      
      {showSignup && (
        <Signup
          onClose={() => setShowSignup(false)}
          onSignupSuccess={handleSignupSuccess}
          openLogin={() => {
            setShowSignup(false);
            setShowLogin(true);
          }}
        />
      )}

    
      {showRentModal && selectedCar && (
        <RentModal
          selectedCar={selectedCar}
          closeModal={() => {
            setShowRentModal(false);
            setSelectedCar(null);
          }}
        />
      )}
    </div>
  );
}

export default App;
