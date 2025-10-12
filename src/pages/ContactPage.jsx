"use client"

import { useState } from "react"
import { MapPin, Phone, Mail, Clock, Building2, Send, User, MessageSquare } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("[v0] Form submitted:", formData)
    // Handle form submission logic here
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    {
      icon: Building2,
      title: "Hospital",
      details: "Labaid Specialized Hospital",
      subdetails: "Dhanmondi, Dhaka",
      gradient: "from-teal-500 to-cyan-500",
    },
    {
      icon: MapPin,
      title: "Address",
      details: "House: 1 and 6, Road No 4",
      subdetails: "Mirpur Road, Dhanmondi 32, Dhaka-1205",
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      icon: Phone,
      title: "Phone",
      details: "+880 1XXX-XXXXXX",
      subdetails: "Available during consultation hours",
      gradient: "from-blue-500 to-indigo-500",
    },
    {
      icon: Mail,
      title: "Email",
      details: "dr.faroque@labaid.com",
      subdetails: "Response within 24 hours",
      gradient: "from-teal-600 to-emerald-500",
    },
    {
      icon: Clock,
      title: "Consultation Hours",
      details: "Saturday - Thursday",
      subdetails: "4:00 PM - 8:00 PM",
      gradient: "from-emerald-500 to-green-500",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
              Get In Touch
            </span>
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Contact <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">Me</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Have questions or need to schedule an appointment? We're here to help. Reach out to us through any of the
            following channels.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {contactInfo.map((info, index) => {
            const Icon = info.icon
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${info.gradient} flex items-center justify-center mb-4 shadow-md`}
                >
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{info.title}</h3>
                <p className="text-gray-700 font-medium mb-1">{info.details}</p>
                <p className="text-gray-500 text-sm">{info.subdetails}</p>
              </div>
            )
          })}
        </div>

        {/* Contact Form and Map Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <User className="w-4 h-4 inline mr-2" />
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-teal-500 focus:outline-none transition-colors"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <Mail className="w-4 h-4 inline mr-2" />
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-teal-500 focus:outline-none transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <Phone className="w-4 h-4 inline mr-2" />
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-teal-500 focus:outline-none transition-colors"
                  placeholder="+880 1XXX-XXXXXX"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <MessageSquare className="w-4 h-4 inline mr-2" />
                  Your Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-teal-500 focus:outline-none transition-colors resize-none"
                  placeholder="Tell us how we can help you..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-teal-600 to-cyan-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-teal-700 hover:to-cyan-700 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group"
              >
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                Send Message
              </button>
            </form>
          </div>

          {/* Map and Additional Info */}
          <div className="space-y-8">
            {/* Map Placeholder */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 h-[400px] flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-teal-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Labaid Specialized Hospital</h3>
                <p className="text-gray-600 mb-4">
                  House: 1 and 6, Road No 4<br />
                  Mirpur Road, Dhanmondi 32
                  <br />
                  Dhaka--1205, Bangladesh
                </p>
                <button className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white px-6 py-3 rounded-full font-semibold hover:from-teal-700 hover:to-cyan-700 transition-all shadow-lg">
                  View on Google Maps
                </button>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="bg-gradient-to-r from-teal-600 to-cyan-600 rounded-3xl p-8 text-white shadow-xl">
              <h3 className="text-2xl font-bold mb-4">Emergency Contact</h3>
              <p className="text-teal-50 mb-6">
                For urgent medical concerns, please contact the hospital emergency department directly.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5" />
                  <span className="font-semibold">Emergency: +880 1XXX-XXXXXX</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5" />
                  <span className="font-semibold">24/7 Emergency Services</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
