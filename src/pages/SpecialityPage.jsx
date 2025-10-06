"use client"

import { Activity, Droplet, FileText, Heart, Microscope, Pill, Stethoscope, TestTube } from "lucide-react"
import { Link } from "react-router-dom"

export default function SpecialityPage() {
  const specialties = [
    {
      icon: Stethoscope,
      title: "ERCP",
      description:
        "Endoscopic Retrograde Cholangiopancreatography - Advanced diagnostic and therapeutic procedure for bile duct and pancreatic disorders.",
      gradient: "from-teal-500 to-cyan-500",
    },
    {
      icon: Droplet,
      title: "Hepatitis Treatment",
      description:
        "Comprehensive treatment for Hepatitis A, B, C, D, and E with latest antiviral therapies and personalized care plans.",
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      icon: Activity,
      title: "Jaundice Treatment",
      description:
        "Expert diagnosis and treatment of jaundice, addressing underlying liver conditions with evidence-based approaches.",
      gradient: "from-blue-500 to-indigo-500",
    },
    {
      icon: Heart,
      title: "Liver Disease Management",
      description:
        "Specialized care for fatty liver, cirrhosis, and chronic liver conditions with comprehensive treatment protocols.",
      gradient: "from-teal-600 to-emerald-500",
    },
    {
      icon: Microscope,
      title: "Liver Biopsy",
      description:
        "Advanced diagnostic technique for accurate assessment of liver tissue and disease progression monitoring.",
      gradient: "from-emerald-500 to-green-500",
    },
    {
      icon: TestTube,
      title: "Advanced Blood Tests",
      description:
        "Comprehensive liver function tests and specialized blood work for precise diagnosis and treatment planning.",
      gradient: "from-cyan-600 to-teal-600",
    },
    {
      icon: FileText,
      title: "Imaging Studies",
      description:
        "State-of-the-art imaging techniques including ultrasound, CT, and MRI for detailed liver assessment.",
      gradient: "from-blue-600 to-cyan-600",
    },
    {
      icon: Pill,
      title: "Liver Cancer Screening",
      description:
        "Early detection and screening programs for liver cancer with advanced diagnostic protocols and monitoring.",
      gradient: "from-indigo-500 to-purple-500",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
              Areas of Expertise
            </span>
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Our{" "}
            <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
              Specialties
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            With over 15 years of experience, Dr. Faroque Ahmed provides comprehensive care across a wide range of liver
            and gastrointestinal conditions using the latest medical advances and personalized treatment approaches.
          </p>
        </div>

        {/* Specialties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {specialties.map((specialty, index) => {
            const Icon = specialty.icon
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div
                  className={`w-16 h-16 rounded-xl bg-gradient-to-br ${specialty.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md`}
                >
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{specialty.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{specialty.description}</p>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA Section */}
        <div className="bg-gradient-to-r from-teal-600 to-cyan-600 rounded-3xl p-12 text-center shadow-2xl">
          <h2 className="text-3xl font-bold text-white mb-4">Need Expert Consultation?</h2>
          <p className="text-teal-50 text-lg mb-8 max-w-2xl mx-auto">
            Book an appointment today and receive personalized care from an experienced hepatologist dedicated to your
            liver health and wellbeing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to='/appointment'>
            <button className="bg-white text-teal-600 px-8 py-4 rounded-full font-semibold hover:bg-teal-50 transition-all shadow-lg hover:shadow-xl hover:scale-105">
              Book Appointment
            </button>
            </Link>
            <Link to='/about'>
            <button className="bg-teal-700 text-white px-8 py-4 rounded-full font-semibold hover:bg-teal-800 transition-all border-2 border-white/30 hover:scale-105">
              Learn More
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
