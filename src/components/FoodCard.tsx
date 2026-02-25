import { Plus, Star } from "lucide-react";
import { motion } from "framer-motion";
import { useCart } from "@/contexts/CartContext";
import type { FoodItem } from "@/data/mockData";
import { toast } from "sonner";

const FoodCard = ({ item }: { item: FoodItem }) => {
  const { addItem } = useCart();

  const handleAdd = () => {
    addItem(item);
    toast.success(`${item.name} added to cart!`);
  };

  return (
    <motion.div
      whileHover={{ y: -2 }}
      className="bg-card rounded-lg overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col"
    >
      <div className="relative h-40 overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <span
          className={`absolute top-2 left-2 w-4 h-4 rounded-sm border-2 flex items-center justify-center ${
            item.isVeg ? "border-veg" : "border-nonveg"
          }`}
        >
          <span className={`w-2 h-2 rounded-full ${item.isVeg ? "bg-veg" : "bg-nonveg"}`} />
        </span>
      </div>
      <div className="p-3 flex-1 flex flex-col">
        <div className="flex items-start justify-between gap-2 mb-1">
          <h4 className="font-semibold text-sm text-card-foreground leading-tight">{item.name}</h4>
          <span className="flex items-center gap-0.5 text-xs text-star shrink-0">
            <Star className="w-3 h-3 fill-current" /> {item.rating}
          </span>
        </div>
        <p className="text-xs text-muted-foreground mb-3 line-clamp-2 flex-1">{item.description}</p>
        <div className="flex items-center justify-between">
          <span className="font-bold text-card-foreground">${item.price.toFixed(2)}</span>
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={handleAdd}
            className="brand-gradient text-primary-foreground p-1.5 rounded-lg hover:opacity-90 transition-opacity"
          >
            <Plus className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default FoodCard;
