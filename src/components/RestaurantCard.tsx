import { Link } from "react-router-dom";
import { Star, Clock, Truck } from "lucide-react";
import { motion } from "framer-motion";
import type { Restaurant } from "@/data/mockData";

const RestaurantCard = ({ restaurant }: { restaurant: Restaurant }) => (
  <motion.div
    whileHover={{ y: -4 }}
    transition={{ duration: 0.2 }}
  >
    <Link to={`/restaurant/${restaurant.id}`} className="block group">
      <div className="bg-card rounded-lg overflow-hidden shadow-card hover:shadow-card-hover transition-shadow duration-300">
        <div className="relative h-48 overflow-hidden">
          <img
            src={restaurant.image}
            alt={restaurant.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          {restaurant.featured && (
            <span className="absolute top-3 left-3 brand-gradient text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
              Featured
            </span>
          )}
        </div>
        <div className="p-4">
          <div className="flex items-start justify-between mb-2">
            <h3 className="font-semibold text-card-foreground">{restaurant.name}</h3>
            <span className="flex items-center gap-1 bg-veg/10 text-veg text-xs font-semibold px-2 py-0.5 rounded">
              <Star className="w-3 h-3 fill-current" /> {restaurant.rating}
            </span>
          </div>
          <p className="text-sm text-muted-foreground mb-3">
            {restaurant.cuisine.join(" • ")}
          </p>
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" /> {restaurant.deliveryTime}
            </span>
            <span className="flex items-center gap-1">
              <Truck className="w-3.5 h-3.5" /> ${restaurant.deliveryFee.toFixed(2)}
            </span>
          </div>
        </div>
      </div>
    </Link>
  </motion.div>
);

export default RestaurantCard;
