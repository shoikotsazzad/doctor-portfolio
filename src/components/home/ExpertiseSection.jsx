import { Stethoscope, HeartPulse, Syringe, Microscope, Sparkles } from "lucide-react"
import { Link } from "react-router-dom"

const expertise = [
    {
        icon: Stethoscope,
        title: "Liver Disease Treatment",
        desc: "Comprehensive diagnosis and treatment for all liver-related conditions including cirrhosis, fatty liver, and liver failure.",
        color: "from-teal-500 to-cyan-500",
    },
    {
        icon: HeartPulse,
        title: "Hepatitis Management",
        desc: "Specialized care for Hepatitis A, B, C, D, and E with proven results and personalized treatment plans.",
        color: "from-cyan-500 to-blue-500",
    },
    {
        icon: Syringe,
        title: "ERCP Procedures",
        desc: "Advanced endoscopic procedures for precise liver and bile duct diagnostics with minimal invasiveness.",
        color: "from-teal-600 to-teal-500",
    },
    {
        icon: Microscope,
        title: "Diagnostic Expertise",
        desc: "Utilizing modern techniques like biopsy, imaging, and blood analysis for accurate diagnosis.",
        color: "from-blue-500 to-cyan-500",
    },
]

export default function ExpertiseSection() {
    return (
        <section className="relative bg-gradient-to-b from-white to-teal-50/30 py-20 px-6 overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-20 right-10 w-72 h-72 bg-teal-200/20 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-20 left-10 w-72 h-72 bg-cyan-200/20 rounded-full blur-3xl -z-10" />

            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16 space-y-4">
                    <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
                        <Sparkles className="w-4 h-4" />
                        Specialized Medical Services
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">
                        Areas of <span className="text-teal-600">Expertise</span>
                    </h2>

                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                        Delivering exceptional care through specialized knowledge and cutting-edge medical technology
                    </p>
                </div>

                {/* Expertise Cards Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {expertise.map((item, index) => {
                        const Icon = item.icon
                        return (
                            <div
                                key={index}
                                className="group relative bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-teal-200 hover:-translate-y-2"
                            >
                                {/* Gradient background on hover */}
                                <div className="absolute inset-0 bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />

                                {/* Icon with gradient background */}
                                <div
                                    className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                                >
                                    <Icon className="w-8 h-8 text-white" />
                                </div>

                                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-teal-600 transition-colors">
                                    {item.title}
                                </h3>

                                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>

                                {/* Decorative corner accent */}
                                <div className="absolute top-4 right-4 w-2 h-2 bg-teal-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                        )
                    })}
                </div>

                {/* Bottom CTA */}
                <Link to='/appointment'>
                    <div className="text-center mt-16">
                        <p className="text-muted-foreground mb-6">Need specialized consultation for your condition?</p>
                        <button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105">
                            Schedule a Consultation
                        </button>
                    </div>
                </Link>
            </div>
        </section>
    )
}
