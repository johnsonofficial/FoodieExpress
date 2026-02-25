import { useState, useMemo } from "react";
import { Search, X } from "lucide-react";
import { motion } from "framer-motion";
import { useSearchParams } from "react-router-dom";
import { restaurants, categories } from "@/data/mockData";
import RestaurantCard from "@/components/RestaurantCard";

const Restaurants = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryFilter = searchParams.get("category") || "";
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState<"rating" | "deliveryTime" | "deliveryFee">("rating");

  const filtered = useMemo(() => {
    let list = restaurants.filter(
      (r) =>
        (r.name.toLowerCase().includes(search.toLowerCase()) ||
        r.cuisine.some((c) => c.toLowerCase().includes(search.toLowerCase()))) &&
        (!categoryFilter || r.cuisine.some((c) => c.toLowerCase() === categoryFilter.toLowerCase()))
    );
    if (sortBy === "rating") list.sort((a, b) => b.rating - a.rating);
    if (sortBy === "deliveryFee") list.sort((a, b) => a.deliveryFee - b.deliveryFee);
    return list;
  }, [search, sortBy, categoryFilter]);

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-display font-bold text-foreground mb-8"
        >
          All Restaurants
        </motion.h1>

        {/* Category Filter */}
        {categoryFilter && (
          <div className="flex items-center gap-2 mb-4">
            <span className="text-sm text-muted-foreground">Filtering by:</span>
            <span className="inline-flex items-center gap-1 px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
              {categoryFilter}
              <button onClick={() => setSearchParams({})} className="hover:text-destructive">
                <X className="w-3.5 h-3.5" />
              </button>
            </span>
          </div>
        )}

        {/* Category Pills */}
        <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
          {categories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => setSearchParams(categoryFilter === cat.name ? {} : { category: cat.name })}
              className={`shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                categoryFilter === cat.name
                  ? "brand-gradient text-primary-foreground"
                  : "bg-card border border-border text-muted-foreground hover:text-foreground"
              }`}
            >
              {cat.icon} {cat.name}
            </button>
          ))}
        </div>

        {/* Search & Sort */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search restaurants or cuisines..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-card border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow"
            />
          </div>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
            className="px-4 py-3 bg-card border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
          >
            <option value="rating">Top Rated</option>
            <option value="deliveryFee">Lowest Delivery Fee</option>
            <option value="deliveryTime">Fastest Delivery</option>
          </select>
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-xl text-muted-foreground">No restaurants found</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((r, i) => (
              <motion.div
                key={r.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <RestaurantCard restaurant={r} />
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Restaurants;
