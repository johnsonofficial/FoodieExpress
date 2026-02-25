import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Star, Clock, Truck, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { restaurants, foodItems } from "@/data/mockData";
import FoodCard from "@/components/FoodCard";
import { useState, useMemo } from "react";

const RestaurantMenu = () => {
  const { id } = useParams();
  const restaurant = restaurants.find((r) => r.id === id);
  const items = foodItems.filter((f) => f.restaurantId === id);
  const [filter, setFilter] = useState<"all" | "veg" | "nonveg">("all");

  const filteredItems = useMemo(() => {
    if (filter === "veg") return items.filter((i) => i.isVeg);
    if (filter === "nonveg") return items.filter((i) => !i.isVeg);
    return items;
  }, [items, filter]);

  if (!restaurant) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl text-muted-foreground mb-4">Restaurant not found</p>
          <Link to="/restaurants" className="text-primary font-medium">
            Back to restaurants
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <div className="relative h-64 md:h-80 overflow-hidden">
        <img src={restaurant.image} alt={restaurant.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 hero-overlay" />
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-4 pb-8">
            <Link
              to="/restaurants"
              className="inline-flex items-center gap-1 text-primary-foreground/80 text-sm mb-4 hover:text-primary-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Back
            </Link>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-2"
            >
              {restaurant.name}
            </motion.h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-primary-foreground/80">
              <span className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-star text-star" /> {restaurant.rating}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" /> {restaurant.deliveryTime}
              </span>
              <span className="flex items-center gap-1">
                <Truck className="w-4 h-4" /> ${restaurant.deliveryFee.toFixed(2)} delivery
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-4 h-4" /> {restaurant.address}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Menu */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-3 mb-8">
          <span className="text-sm font-medium text-muted-foreground">Filter:</span>
          {(["all", "veg", "nonveg"] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                filter === f
                  ? "brand-gradient text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:text-foreground"
              }`}
            >
              {f === "all" ? "All" : f === "veg" ? "🟢 Veg" : "🔴 Non-Veg"}
            </button>
          ))}
        </div>

        {filteredItems.length === 0 ? (
          <p className="text-center text-muted-foreground py-12">No items found</p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {filteredItems.map((item) => (
              <FoodCard key={item.id} item={item} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default RestaurantMenu;
