// Footer Component
function Footer() {
    return (
      <footer className="bg-gray-800 text-white mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-3">Get Us</h3>
              <p className="text-gray-300 text-sm">
                House- 01, Road-04, Dhanmondi,<br />
                Dhaka 1205, Bangladesh.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">Contact</h3>
              <p className="text-gray-300 text-sm">
                +88 02 58610793-8<br />
                +88 0241060908-18
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">Email</h3>
              <p className="text-gray-300 text-sm">
                info@labaidgroup.com
              </p>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-6 pt-6 text-center text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} Professor (Dr.) Faroque Ahmed. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  }
  export default Footer;