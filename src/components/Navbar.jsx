import { useState } from "react";
import { Phone, Mail, MapPin, Award, Stethoscope } from "lucide-react";

export default function Navbar({ currentPage, setCurrentPage }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "speciality", label: "Speciality" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className="bg-gradient-to-r from-teal-700 via-teal-600 to-cyan-600 text-white shadow-2xl">
      {/* ---------- Top Info Bar ---------- */}
      <div className="bg-teal-800 bg-opacity-50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-between items-center py-2 text-xs sm:text-sm">
            <div className="flex items-center gap-4 flex-wrap">
              <div className="flex items-center gap-1">
                <Phone className="w-3 h-3" />
                <span>+880-1234-567890</span>
              </div>
              <div className="flex items-center gap-1">
                <Mail className="w-3 h-3" />
                <span>contact@drfaroque.com</span>
              </div>
            </div>
            <div className="flex items-center gap-1 text-teal-200">
              <MapPin className="w-3 h-3" />
              <span>Labaid Specialized Hospital, Dhanmondi</span>
            </div>
          </div>
        </div>
      </div>

      {/* ---------- Main Navbar ---------- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          {/* Doctor Info Section */}
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-lg">
              <Stethoscope className="w-8 h-8 text-teal-600" />
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight">
                Professor (Dr.) Faroque Ahmed
              </h1>
              <div className="flex flex-wrap items-center gap-2 mt-1">
                <p className="text-sm sm:text-base text-teal-100 font-medium">
                  Liver & Gastrointestinal Specialist
                </p>
                <span className="hidden sm:inline text-teal-300">•</span>
                <div className="flex items-center gap-1 text-xs sm:text-sm text-teal-200">
                  <Award className="w-4 h-4" />
                  <span>MBBS, MD (Hepatology), FRCP (London)</span>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-teal-200 mt-1">
                Professor & Head, Dept. of Hepatology | DMCH
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <ul className="flex gap-1">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => setCurrentPage(item.id)}
                    className={`px-5 py-2.5 rounded-lg font-medium transition-all duration-300 ${
                      currentPage === item.id
                        ? "bg-white text-teal-700 shadow-lg transform scale-105"
                        : "hover:bg-teal-500 hover:shadow-md"
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-teal-500 transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* ---------- Mobile Navigation ---------- */}
        {mobileMenuOpen && (
          <div className="lg:hidden pb-4 animate-fade-in">
            <ul className="flex flex-col gap-2">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => {
                      setCurrentPage(item.id);
                      setMobileMenuOpen(false);
                    }}
                    className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                      currentPage === item.id
                        ? "bg-white text-teal-700 shadow-lg"
                        : "bg-teal-500 bg-opacity-30 hover:bg-opacity-50"
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* ---------- Experience Badge ---------- */}
      <div className="bg-gradient-to-r from-amber-500 to-amber-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center gap-2 py-2 text-sm font-semibold">
            <Award className="w-4 h-4" />
            <span>15+ Years of Clinical Excellence</span>
            <span className="hidden sm:inline">•</span>
            <span className="hidden sm:inline">ID: D59HA19</span>
          </div>
        </div>
      </div>
    </nav>
  );
}
