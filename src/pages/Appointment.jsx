import { useState } from "react";
import { CalendarIcon, Clock, MapPin, Phone, Mail, User, Stethoscope, Award, CheckCircle2 } from "lucide-react";
import doctorPhoto from "../assets/1584253038.jpg";

export default function Appointment() {
  const [date, setDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    notes: "",
  });

  const timeSlots = [
    "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
    "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM",
    "05:00 PM", "05:30 PM", "06:00 PM",
  ];

  const services = [
    "ERCP (Endoscopic Retrograde Cholangiopancreatography)",
    "Hepatitis A Treatment",
    "Hepatitis B Treatment",
    "Hepatitis C Treatment",
    "Hepatitis D Treatment",
    "Hepatitis E Treatment",
    "Jaundice Treatment",
    "Liver Disease Consultation",
    "Gastrointestinal Consultation",
    "General Check-up",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Appointment booking:", { date, selectedTime, ...formData });
    alert("Appointment submitted successfully!");
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-teal-900 mb-4">Book Your Appointment</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Schedule a consultation with Dr. Faroque Ahmed, a leading specialist in liver and gastrointestinal health.
          </p>
        </div>

        {/* Doctor Info */}
        <div className="mb-8 border border-teal-200 shadow-lg rounded-xl overflow-hidden">
          <div className="bg-gradient-to-r from-teal-600 to-cyan-600 p-6 text-white">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <img
                src={doctorPhoto}
                alt="Dr. Faroque Ahmed"
                className="w-24 h-24 rounded-full object-cover border-4 border-white/30"
              />

              <div className="flex-1">
                <h2 className="text-3xl font-bold mb-2">Professor (Dr.) Faroque Ahmed</h2>
                <p className="text-teal-50 text-lg mb-3">MBBS (DMC), MD (Hepatology), FRCP (London)</p>
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="bg-white/20 text-white border border-white/30 px-3 py-1 rounded-full text-sm flex items-center gap-1">
                    <Stethoscope className="w-3 h-3" /> Liver & GI Specialist
                  </span>
                  <span className="bg-white/20 text-white border border-white/30 px-3 py-1 rounded-full text-sm flex items-center gap-1">
                    <Award className="w-3 h-3" /> 15 Years Experience
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="w-4 h-4" />
                  <span>Labaid Specialized Hospital, Dhanmondi | Dhaka Medical College & Hospital</span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6">
            <h3 className="font-semibold text-lg text-gray-900 mb-3">Specializes In:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
              {services.slice(0, 6).map((service, idx) => (
                <div key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 mt-0.5" />
                  <span>{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Appointment Form */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Calendar Section */}
          <div className="border border-teal-200 shadow-lg rounded-xl p-6 bg-white">
            <h3 className="text-xl font-semibold text-teal-900 flex items-center gap-2 mb-4">
              <CalendarIcon className="w-5 h-5" /> Select Date
            </h3>
            <input
              type="date"
              value={date.toISOString().split("T")[0]}
              onChange={(e) => setDate(new Date(e.target.value))}
              className="w-full border border-teal-300 rounded-md p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <div className="mt-4 p-3 bg-teal-50 rounded-lg border border-teal-200 text-sm text-teal-800">
              Selected: {date.toDateString()}
            </div>
          </div>

          {/* Form Section */}
          <div className="lg:col-span-2 border border-teal-200 shadow-lg rounded-xl p-6 bg-white">
            <h3 className="text-xl font-semibold text-teal-900 flex items-center gap-2 mb-4">
              <Clock className="w-5 h-5" /> Appointment Details
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Time Slots */}
              <div>
                <p className="text-base font-semibold text-gray-900 mb-3">Available Time Slots</p>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      type="button"
                      onClick={() => setSelectedTime(time)}
                      className={`text-sm py-2 px-3 rounded-md border ${selectedTime === time
                          ? "bg-teal-600 text-white border-teal-600"
                          : "border-teal-300 text-gray-700 hover:bg-teal-50"
                        } transition-all`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>

              {/* Inputs */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block font-medium text-gray-700 mb-1">Full Name *</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    placeholder="Enter your full name"
                    required
                    className="w-full border border-teal-300 rounded-md p-2 focus:ring-2 focus:ring-teal-500"
                  />
                </div>
                <div>
                  <label className="block font-medium text-gray-700 mb-1">Phone *</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    placeholder="+880 1XXX-XXXXXX"
                    required
                    className="w-full border border-teal-300 rounded-md p-2 focus:ring-2 focus:ring-teal-500"
                  />
                </div>
              </div>

              <div>
                <label className="block font-medium text-gray-700 mb-1">Email *</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  placeholder="your.email@example.com"
                  required
                  className="w-full border border-teal-300 rounded-md p-2 focus:ring-2 focus:ring-teal-500"
                />
              </div>

              <div>
                <label className="block font-medium text-gray-700 mb-1">Reason for Visit *</label>
                <select
                  value={formData.service}
                  onChange={(e) => handleInputChange("service", e.target.value)}
                  required
                  className="w-full border border-teal-300 rounded-md p-2 bg-white focus:ring-2 focus:ring-teal-500"
                >
                  <option value="">Select a service</option>
                  {services.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block font-medium text-gray-700 mb-1">Additional Notes (Optional)</label>
                <textarea
                  value={formData.notes}
                  onChange={(e) => handleInputChange("notes", e.target.value)}
                  placeholder="Any specific concerns or symptoms..."
                  className="w-full border border-teal-300 rounded-md p-2 focus:ring-2 focus:ring-teal-500 min-h-[100px]"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={
                  !selectedTime || !formData.name || !formData.email || !formData.phone || !formData.service
                }
                className="w-full bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white font-semibold py-4 text-lg rounded-md shadow-lg disabled:opacity-50 transition-all"
              >
                Confirm Appointment
              </button>
              <p className="text-sm text-gray-500 text-center mt-3">
                You will receive a confirmation email and SMS shortly.
              </p>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
}
