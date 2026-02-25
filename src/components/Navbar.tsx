import { Link, useLocation as useRouterLocation } from "react-router-dom";
import { ShoppingCart, Menu, X, MapPin, User } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { useLocation } from "@/contexts/LocationContext";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const { totalItems } = useCart();
  const { address, isLocationSet } = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const routerLocation = useRouterLocation();

  const links = [
    { to: "/", label: "Home" },
    { to: "/restaurants", label: "Restaurants" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl">🍔</span>
          <span className="text-xl font-bold brand-gradient-text">FoodieExpress</span>
        </Link>

        {/* Location Display */}
        {isLocationSet && (
          <div className="hidden md:flex items-center gap-1.5 text-sm text-muted-foreground max-w-[200px]">
            <MapPin className="w-4 h-4 text-primary shrink-0" />
            <span className="truncate">{address}</span>
          </div>
        )}

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                routerLocation.pathname === l.to ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link
            to="/login"
            className="hidden md:inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            <User className="w-4 h-4" />
            Login
          </Link>
          <Link
            to="/cart"
            className="relative p-2 rounded-full hover:bg-muted transition-colors"
          >
            <ShoppingCart className="w-5 h-5" />
            {totalItems > 0 && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-1 -right-1 w-5 h-5 brand-gradient text-primary-foreground text-xs rounded-full flex items-center justify-center font-semibold"
              >
                {totalItems}
              </motion.span>
            )}
          </Link>

          <button
            className="md:hidden p-2 rounded-full hover:bg-muted transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden border-t border-border overflow-hidden bg-background"
          >
            <div className="px-4 py-4 space-y-3">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setMobileOpen(false)}
                  className={`block py-2 text-sm font-medium transition-colors ${
                    routerLocation.pathname === l.to ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {l.label}
                </Link>
              ))}
              <Link
                to="/login"
                onClick={() => setMobileOpen(false)}
                className="block py-2 text-sm font-medium text-primary"
              >
                Login / Sign Up
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
