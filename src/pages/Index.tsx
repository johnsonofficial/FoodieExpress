import { Link, useNavigate } from "react-router-dom";
import { ArrowRight, Clock, Shield, Truck, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import heroImage from "@/assets/hero-food.jpg";
import { restaurants, foodItems, categories } from "@/data/mockData";
import { useLocation } from "@/contexts/LocationContext";
import RestaurantCard from "@/components/RestaurantCard";
import FoodCard from "@/components/FoodCard";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const Index = () => {
  const navigate = useNavigate();
  const { address, setAddress, isLocationSet } = useLocation();
  const [locationInput, setLocationInput] = useState(address);
  const featuredRestaurants = restaurants.filter((r) => r.featured);
  const popularDishes = foodItems.slice(0, 8);

  const handleSetLocation = () => {
    if (locationInput.trim()) {
      setAddress(locationInput.trim());
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[85vh] min-h-[500px] flex items-center overflow-hidden">
        <img
          src={heroImage}
          alt="Delicious food spread"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate="visible"
            className="max-w-2xl"
          >
            <motion.h1
              variants={fadeUp}
              custom={0}
              className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-primary-foreground mb-6 leading-tight"
            >
              Craving Something <br />
              <span className="text-secondary">Delicious?</span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              custom={1}
              className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-lg"
            >
              Order from the best restaurants near you. Fast delivery, fresh food, amazing taste.
            </motion.p>
            <motion.div variants={fadeUp} custom={2} className="flex flex-col gap-4">
              {/* Location Input */}
              <div className="flex items-center gap-2 bg-background/90 backdrop-blur-sm rounded-full p-2 pl-4 max-w-lg shadow-lg">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <input
                  type="text"
                  placeholder="Enter your delivery address..."
                  value={locationInput}
                  onChange={(e) => setLocationInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSetLocation()}
                  maxLength={200}
                  className="flex-1 bg-transparent text-foreground placeholder:text-muted-foreground text-sm outline-none"
                />
                <button
                  onClick={handleSetLocation}
                  className="brand-gradient text-primary-foreground px-5 py-2.5 rounded-full font-semibold text-sm hover:opacity-90 transition-opacity shrink-0"
                >
                  Find Food
                </button>
              </div>

              {isLocationSet && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-primary-foreground/70 text-sm flex items-center gap-1.5"
                >
                  <MapPin className="w-3.5 h-3.5" />
                  Delivering to: {address}
                </motion.p>
              )}

              <Link
                to="/restaurants"
                className="inline-flex items-center gap-2 brand-gradient text-primary-foreground px-8 py-4 rounded-full font-semibold text-lg hover:opacity-90 transition-opacity shadow-lg w-fit"
              >
                Order Now <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-warm">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Truck, title: "Fast Delivery", desc: "Get your food delivered in under 30 minutes" },
              { icon: Shield, title: "Safe & Hygienic", desc: "Contactless delivery with safety standards" },
              { icon: Clock, title: "24/7 Service", desc: "Order anytime, we're always available" },
            ].map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="flex items-start gap-4 p-6 bg-card rounded-lg shadow-card"
              >
                <div className="brand-gradient p-3 rounded-lg shrink-0">
                  <f.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-card-foreground mb-1">{f.title}</h3>
                  <p className="text-sm text-muted-foreground">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-display font-bold text-foreground mb-8 text-center">
            What are you craving?
          </h2>
          <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
            {categories.map((cat, i) => (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ scale: 1.05 }}
                onClick={() => navigate(`/restaurants?category=${encodeURIComponent(cat.name)}`)}
                className="flex flex-col items-center gap-2 p-4 bg-card rounded-lg shadow-card hover:shadow-card-hover transition-shadow cursor-pointer"
              >
                <span className="text-3xl">{cat.icon}</span>
                <span className="text-xs font-medium text-card-foreground">{cat.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Restaurants */}
      <section className="py-16 bg-warm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-display font-bold text-foreground">
              Featured Restaurants
            </h2>
            <Link
              to="/restaurants"
              className="text-primary font-medium text-sm flex items-center gap-1 hover:gap-2 transition-all"
            >
              View all <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredRestaurants.map((r) => (
              <RestaurantCard key={r.id} restaurant={r} />
            ))}
          </div>
        </div>
      </section>

      {/* Popular Dishes */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-display font-bold text-foreground mb-8 text-center">
            Popular Dishes
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {popularDishes.map((item) => (
              <FoodCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
