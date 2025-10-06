import { MapPin, Phone, Mail, HeartPulse, Facebook, Linkedin, Youtube } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-gradient-to-br from-teal-600 via-teal-700 to-cyan-700 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-10">
          {/* ---------- Address ---------- */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <MapPin className="w-5 h-5 text-teal-200" />
              <h3 className="text-lg font-semibold">Get Me</h3>
            </div>
            <p className="text-teal-100 text-sm leading-relaxed">
              House- 01, Road-04, Dhanmondi,<br />
              Dhaka 1205, Bangladesh.
            </p>
          </div>

          {/* ---------- Contact ---------- */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Phone className="w-5 h-5 text-teal-200" />
              <h3 className="text-lg font-semibold">Contact</h3>
            </div>
            <p className="text-teal-100 text-sm leading-relaxed">
              +88 02 58610793-8<br />
              +88 0241060908-18
            </p>
          </div>

          {/* ---------- Email ---------- */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Mail className="w-5 h-5 text-teal-200" />
              <h3 className="text-lg font-semibold">Email</h3>
            </div>
            <p className="text-teal-100 text-sm leading-relaxed">info@labaidgroup.com</p>

            {/* ---------- Social Icons ---------- */}
            <div className="flex gap-4 mt-4">
              <a
                href="#"
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-200"
              >
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-200"
              >
                <Linkedin className="w-5 h-5 text-white" />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-200"
              >
                <Youtube className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>
        </div>

        {/* ---------- Bottom Copyright ---------- */}
        <div className="border-t border-teal-300/50 mt-10 pt-6 text-center text-sm text-teal-100">
          <div className="flex items-center justify-center gap-2 mb-2">
            
          </div>
          <p>&copy; {new Date().getFullYear()} Professor (Dr.) Faroque Ahmed. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
