import React from "react";
import AppNavbar from "./components/AppNavbar";
import HeroSection from "./components/HeroSection";
import DealerInfo from "./components/DealerInfo";
import Services from "./components/Services";
import Footer from "./components/Footer";
import Payments from "./components/Payments";
import TyersList from "./components/TyersList";

function App() {
  return (
    <div>
      <AppNavbar />
      <HeroSection />
      <DealerInfo />
      <Services />
      <TyersList />
      <Payments />
      <Footer />
    </div>
  );
}

export default App;
