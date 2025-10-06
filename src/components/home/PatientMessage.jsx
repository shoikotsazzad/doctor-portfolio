import { Heart, Shield, Award, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function PatientMessage() {
    return (
        <section className="relative bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 py-20 px-6 overflow-hidden">
            {/* Decorative background patterns */}
            <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
            <div className="absolute top-0 right-0 w-96 h-96 bg-teal-200/30 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-200/30 rounded-full blur-3xl -z-10" />

            {/* Floating decorative elements */}
            <div className="absolute top-10 left-10 w-20 h-20 border-2 border-teal-200/40 rounded-full animate-pulse" />
            <div className="absolute bottom-10 right-10 w-32 h-32 border-2 border-cyan-200/30 rounded-full" />

            <div className="max-w-5xl mx-auto relative z-10">
                {/* Main Content */}
                <div className="text-center space-y-8">
                    {/* Heading */}
                    <h2 className="text-4xl md:text-5xl font-bold text-teal-700 leading-tight text-balance">
                        "Dedicated to Your Liver Health & Wellbeing"
                    </h2>

                    {/* Description */}
                    <p className="text-foreground text-lg md:text-xl leading-relaxed max-w-3xl mx-auto text-pretty">
                        With over 25 years of experience, Dr. Faroque Ahmed believes in combining medical expertise with empathy and
                        patient trust. His mission is to help individuals lead healthier lives through accurate diagnosis,
                        compassionate care, and modern treatment solutions.
                    </p>

                    {/* Feature Pills */}
                    <div className="flex flex-wrap justify-center gap-4 pt-6">
                        <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-teal-200 px-6 py-3 rounded-full shadow-sm hover:shadow-md transition-all duration-200 hover:scale-105">
                            <Shield className="w-5 h-5 text-teal-600" />
                            <span className="text-teal-700 font-semibold text-sm">Patient-Centered Care</span>
                        </div>
                        <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-teal-200 px-6 py-3 rounded-full shadow-sm hover:shadow-md transition-all duration-200 hover:scale-105">
                            <Award className="w-5 h-5 text-teal-600" />
                            <span className="text-teal-700 font-semibold text-sm">25+ Years Experience</span>
                        </div>
                        <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-teal-200 px-6 py-3 rounded-full shadow-sm hover:shadow-md transition-all duration-200 hover:scale-105">
                            <Heart className="w-5 h-5 text-teal-600" />
                            <span className="text-teal-700 font-semibold text-sm">Compassionate Approach</span>
                        </div>
                    </div>

                    {/* CTA Buttons (replaced Button component with standard button) */}
                    <Link to="/about">
                        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                            <button className="flex items-center justify-center bg-teal-600 text-white text-base px-8 py-4 rounded-full font-semibold hover:bg-teal-700 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 gap-2">
                                Learn More About Dr. Ahmed
                                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </Link>
                </div>

                {/* Bottom Quote */}
                <div className="mt-16 pt-12 border-t border-teal-200/50">
                    <blockquote className="text-center">
                        <div className="relative inline-block">
                            <div className="absolute -top-6 -left-6 text-6xl text-teal-200 font-serif">"</div>
                            <p className="text-teal-700 text-lg md:text-xl italic mb-4 relative z-10 px-8">
                                Every patient deserves personalized care and the best possible outcome. That's the foundation of my
                                practice.
                            </p>
                        </div>
                        <footer className="text-teal-700 font-semibold text-base mt-6">— Professor Dr. Faroque Ahmed</footer>
                    </blockquote>
                </div>
            </div>
        </section>
    );
}
