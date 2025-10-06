import doctorPhoto from "../../assets/1584253038.jpg";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-teal-700 via-teal-600 to-cyan-600 text-white py-16 px-6 rounded-2xl shadow-lg">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left Text */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Professor (Dr.) Faroque Ahmed
          </h1>
          <p className="text-lg mb-6">
            Liver & Gastrointestinal Specialist <br />
            Professor & Head, Dept. of Hepatology
          </p>
          <button className="bg-white text-teal-700 px-6 py-3 rounded-full font-semibold shadow hover:bg-gray-100 transition">
            Book an Appointment
          </button>
        </div>

        {/* Right Image */}
        <div className="flex-shrink-0">
          <img
            src={doctorPhoto}
            alt="Dr. Faroque Ahmed"
            className="w-56 h-56 md:w-64 md:h-64 rounded-2xl object-cover border-4 border-white shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}
