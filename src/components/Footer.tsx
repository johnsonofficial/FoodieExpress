import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-foreground text-background py-12 mt-16">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-2xl">🍔</span>
            <span className="text-xl font-bold">FoodieExpress</span>
          </div>
          <p className="text-sm opacity-70">
            Delivering happiness, one meal at a time. Fresh food from your favorite restaurants.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Quick Links</h4>
          <div className="space-y-2 text-sm opacity-70">
            <Link to="/" className="block hover:opacity-100 transition-opacity">Home</Link>
            <Link to="/restaurants" className="block hover:opacity-100 transition-opacity">Restaurants</Link>
            <Link to="/cart" className="block hover:opacity-100 transition-opacity">Cart</Link>
          </div>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Support</h4>
          <div className="space-y-2 text-sm opacity-70">
            <p>Help Center</p>
            <p>Contact Us</p>
            <p>FAQs</p>
          </div>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Contact</h4>
          <div className="space-y-2 text-sm opacity-70">
            <p>support@foodieexpress.com</p>
            <p>1-800-FOODIE</p>
          </div>
        </div>
      </div>
      <div className="border-t border-background/20 mt-8 pt-8 text-center text-sm opacity-50">
        © 2026 FoodieExpress. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
