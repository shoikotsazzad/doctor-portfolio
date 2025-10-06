import { useState } from "react";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/Appointment";
import SpecialityPage from "./pages/SpecialityPage";
import ContactPage from "./pages/ContactPage";
import Footer from "./components/Footer";
import Appointment from "./pages/Appointment";

// Main App Component - DEFINED LAST
function App() {
  const [currentPage, setCurrentPage] = useState('home');
  
  const renderPage = () => {
    switch(currentPage) {
      case 'home':
        return <HomePage />;
      case 'about':
        return <AboutPage />;
      case 'appointment':
        return <Appointment />;
      case 'speciality':
        return <SpecialityPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;