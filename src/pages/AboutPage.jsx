import { Award } from "lucide-react";
import doctorPhoto from "../assets/1584253038.jpg"; 

export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto py-12">
      {/* Doctor Info Section */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
        {/* Doctor Image */}
        <div className="flex-shrink-0">
          <img
            src={doctorPhoto}
            alt="Professor (Dr.) Faroque Ahmed"
            className="w-56 h-56 rounded-2xl object-cover shadow-md border-4 border-teal-600"
          />
        </div>

        {/* Doctor Details */}
        <div className="flex-1 text-gray-800">
          <h1 className="text-3xl font-bold text-teal-700">
            Professor (Dr.) Faroque Ahmed
          </h1>
          <p className="text-lg font-medium text-gray-700 mt-2">
            Liver & Gastrointestinal Specialist
          </p>
          <p className="text-sm text-gray-500 mb-4">
            Professor & Head, Dept. of Hepatology — Dhaka Medical College & Hospital
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            <div className="flex items-center gap-1 text-sm bg-teal-100 px-3 py-1 rounded-full">
              <Award className="w-4 h-4 text-teal-700" />
              <span>MBBS (DMC)</span>
            </div>
            <div className="flex items-center gap-1 text-sm bg-teal-100 px-3 py-1 rounded-full">
              <Award className="w-4 h-4 text-teal-700" />
              <span>MD (Hepatology)</span>
            </div>
            <div className="flex items-center gap-1 text-sm bg-teal-100 px-3 py-1 rounded-full">
              <Award className="w-4 h-4 text-teal-700" />
              <span>FRCP (London)</span>
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed mb-3">
            Dr. Faroque Ahmed specializes in the study, diagnosis and treatment of liver diseases.
            He has extensive knowledge of the liver, its functions and the many diseases that can
            affect it. His approach combines precision with compassionate care.
          </p>
          <p className="text-gray-700 leading-relaxed mb-3">
            With expertise in diagnostic techniques like liver biopsy, imaging studies, and blood
            tests, he ensures effective diagnosis and accurate treatment. He develops customized care
            plans tailored to each patient’s needs while offering emotional support and guidance
            throughout their recovery journey.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Currently serving as the Professor & Head of Hepatology at Dhaka Medical College & Hospital,
            Dr. Faroque Ahmed continues to contribute to patient well-being and medical education with
            dedication and excellence.
          </p>
        </div>
      </div>
    </div>
  );
}
