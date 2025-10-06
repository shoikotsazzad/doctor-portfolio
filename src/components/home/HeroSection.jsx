import React from "react";
import doctorPhoto from "../../assets/1584253038.jpg";
import { Calendar, Award, Users, Clock } from "lucide-react";
import { Link } from "react-router-dom";


export default function HeroSection() {
    return (
        <section className="relative bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
            <div className="absolute top-0 right-0 w-96 h-96 bg-teal-200/30 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-200/30 rounded-full blur-3xl -z-10" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-medium">
                                <Award className="w-4 h-4" />
                                Leading Hepatology Expert
                            </div>

                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
                                Professor (Dr.) <span className="text-teal-600">Faroque Ahmed</span>
                            </h1>

                            <p className="text-xl text-muted-foreground leading-relaxed">
                                Liver & Gastrointestinal Specialist
                            </p>

                            <p className="text-lg text-foreground font-medium">
                                Professor & Head, Department of Hepatology
                            </p>
                        </div>

                        <p className="text-base text-muted-foreground leading-relaxed max-w-xl">
                            With over 25 years of experience in hepatology and gastroenterology,
                            providing world-class care for liver diseases, digestive disorders, and
                            comprehensive gastrointestinal treatments.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            {/* Book Appointment Button */}
                            <Link to="/appointment">
                                <button className="flex items-center justify-center bg-teal-600 hover:bg-teal-700 text-white text-base px-8 py-3 rounded-lg transition-colors duration-200">
                                    <Calendar className="w-5 h-5 mr-2" />
                                    Book an Appointment
                                </button>
                            </Link>


                            {/* View Credentials Button */}
                            <Link
                                to="/speciality"
                                className="flex items-center justify-center border border-teal-600 text-teal-600 hover:bg-teal-100/70 text-base px-8 py-3 rounded-lg bg-transparent transition-all duration-200"
                            >
                                View Credentials
                            </Link>

                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
                            <div className="space-y-1">
                                <div className="flex items-center gap-2 text-teal-600">
                                    <Users className="w-5 h-5" />
                                    <p className="text-2xl font-bold">15K+</p>
                                </div>
                                <p className="text-sm text-muted-foreground">Patients Treated</p>
                            </div>
                            <div className="space-y-1">
                                <div className="flex items-center gap-2 text-teal-600">
                                    <Award className="w-5 h-5" />
                                    <p className="text-2xl font-bold">25+</p>
                                </div>
                                <p className="text-sm text-muted-foreground">Years Experience</p>
                            </div>
                            <div className="space-y-1">
                                <div className="flex items-center gap-2 text-teal-600">
                                    <Clock className="w-5 h-5" />
                                    <p className="text-2xl font-bold">24/7</p>
                                </div>
                                <p className="text-sm text-muted-foreground">Emergency Care</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="relative">
                        <div className="relative z-10">
                            {/* Main image container */}
                            <div className="relative aspect-[3/4] max-w-md mx-auto">
                                <div className="absolute inset-0 bg-gradient-to-br from-teal-600 to-cyan-600 rounded-3xl transform rotate-3" />
                                <div className="relative bg-white p-3 rounded-3xl shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-300">
                                    <img
                                        src={doctorPhoto}
                                        alt="Professor Dr. Faroque Ahmed - Hepatology Specialist"
                                        className="rounded-2xl object-cover w-full h-full"
                                    />
                                </div>
                            </div>

                            {/* Floating credential card */}
                            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6 max-w-xs hidden lg:block">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                                        <Award className="w-6 h-6 text-teal-600" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-foreground text-sm">Board Certified</p>
                                        <p className="text-xs text-muted-foreground mt-1">
                                            American Board of Internal Medicine
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
