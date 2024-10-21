import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { scroller } from 'react-scroll';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Header/Home';
import OurServices from './components/OurServiceSec/OurServices';
import AboutUs from './components/AboutUsSec/AboutUs';
import OurTeam from './components/OurTeamSec/OurTeam';
import Clients from './components/ClientSec/Clients';
import Callback from './components/CallbackSec/Callback';
import Vlog from './components/VlogSec/Vlog';
import Facts from './components/FactsSec/Facts';
import Footer from './components/Footer/Footer';
import ServiceOrderHeader from './components/ServiceOrderPage/ServiceOrderHeader';
import ServicePageBody from './components/ServiceOrderPage/ServicePageBody';
import LoadingScreen from './components/LoadingScreen'; // Import the loading screen

const ScrollToSection = () => {
  const location = useLocation();

  useEffect(() => {
      if (location.state?.targetSection) {
          scroller.scrollTo(location.state.targetSection, {
              duration: 500,
              delay: 0,
              smooth: 'easeInOutQuart',
              offset: -100,
          });
      }
  }, [location]);

  return null;
};

function App() {
const [loadingFinished, setLoadingFinished] = useState(false);

return (
  <>
    {/* Pass setLoadingFinished as a prop */}
    {!loadingFinished && <LoadingScreen setLoadingFinished={setLoadingFinished} />}
    
    {loadingFinished && (
      <Router>
        <ScrollToSection />
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Navbar />
                <Home />
                <OurServices />
                <AboutUs />
                <Clients />
                <OurTeam />
                <Callback />
                <Vlog />
                <Facts />
                <Footer />
              </div>
            }
          />
          <Route
            path="/order-service"
            element={
              <div>
                <Navbar />
                <ServiceOrderHeader />
                <ServicePageBody />
                <Footer />
              </div>
            }
          />
        </Routes>
      </Router>
    )}
  </>
);
}

export default App;
