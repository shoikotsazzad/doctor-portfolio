import { Stethoscope, HeartPulse, Syringe, Microscope } from "lucide-react";

const expertise = [
  { icon: <Stethoscope className="w-10 h-10 text-teal-600" />, title: "Liver Disease Treatment", desc: "Comprehensive diagnosis and treatment for all liver-related conditions." },
  { icon: <HeartPulse className="w-10 h-10 text-teal-600" />, title: "Hepatitis Management", desc: "Specialized care for Hepatitis A, B, C, D, and E with proven results." },
  { icon: <Syringe className="w-10 h-10 text-teal-600" />, title: "ERCP Procedures", desc: "Advanced endoscopic procedures for precise liver and bile duct diagnostics." },
  { icon: <Microscope className="w-10 h-10 text-teal-600" />, title: "Diagnostic Expertise", desc: "Utilizing modern techniques like biopsy, imaging, and blood analysis." },
];

export default function ExpertiseSection() {
  return (
    <section className="max-w-6xl mx-auto py-16 px-6">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
        Areas of Expertise
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {expertise.map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
          >
            <div className="flex justify-center mb-4">{item.icon}</div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">
              {item.title}
            </h3>
            <p className="text-gray-600 text-sm text-center">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
