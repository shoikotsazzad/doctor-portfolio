// Footer Component
function Footer() {
  return (
    <footer className="bg-gradient-to-br from-teal-600 via-teal-700 to-cyan-700 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Address */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Get Me</h3>
            <p className="text-teal-100 text-sm">
              House- 01, Road-04, Dhanmondi,<br />
              Dhaka 1205, Bangladesh.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Contact</h3>
            <p className="text-teal-100 text-sm">
              +88 02 58610793-8<br />
              +88 0241060908-18
            </p>
          </div>

          {/* Email */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Email</h3>
            <p className="text-teal-100 text-sm">
              info@labaidgroup.com
            </p>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="border-t border-teal-300/50 mt-8 pt-6 text-center text-sm text-teal-100">
          <p>&copy; {new Date().getFullYear()} Professor (Dr.) Faroque Ahmed. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
