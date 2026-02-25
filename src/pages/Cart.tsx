import { useState } from "react";
import { Link } from "react-router-dom";
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft, CheckCircle2, CreditCard, Banknote, Wallet } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/contexts/CartContext";
import { useLocation } from "@/contexts/LocationContext";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const Cart = () => {
  const { items, updateQuantity, removeItem, clearCart, totalPrice } = useCart();
  const { address: deliveryLocation } = useLocation();
  const [step, setStep] = useState<"cart" | "payment" | "confirmed">("cart");
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const [address, setAddress] = useState({ name: "", phone: "", street: deliveryLocation || "", city: "" });
  const deliveryFee = items.length > 0 ? 2.99 : 0;
  const total = totalPrice + deliveryFee;

  const handleProceedToPayment = () => setStep("payment");

  const handleConfirmOrder = () => {
    setStep("confirmed");
    clearCart();
  };

  if (step === "confirmed") {
    return (
      <div className="min-h-[70vh] flex items-center justify-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-center"
        >
          <CheckCircle2 className="w-20 h-20 text-primary mx-auto mb-4" />
          <h2 className="text-3xl font-display font-bold text-foreground mb-2">Order Confirmed!</h2>
          <p className="text-muted-foreground mb-2">Your order has been placed successfully.</p>
          <p className="text-sm text-muted-foreground mb-6">
            Payment: {paymentMethod === "cod" ? "Cash on Delivery" : paymentMethod === "card" ? "Credit/Debit Card" : "Digital Wallet"}
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 brand-gradient text-primary-foreground px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity"
          >
            Back to Home
          </Link>
        </motion.div>
      </div>
    );
  }

  if (step === "payment") {
    return (
      <div className="min-h-screen py-8">
        <div className="container mx-auto px-4 max-w-2xl">
          <button
            onClick={() => setStep("cart")}
            className="inline-flex items-center gap-1 text-muted-foreground text-sm mb-6 hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Cart
          </button>

          <h1 className="text-3xl font-display font-bold text-foreground mb-8">Checkout</h1>

          {/* Delivery Address */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-card p-6 rounded-lg shadow-card mb-6"
          >
            <h3 className="font-display font-bold text-lg text-card-foreground mb-4">Delivery Address</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="John Doe" value={address.name} onChange={(e) => setAddress({ ...address, name: e.target.value })} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" placeholder="+1 234 567 890" value={address.phone} onChange={(e) => setAddress({ ...address, phone: e.target.value })} />
              </div>
              <div className="space-y-2 sm:col-span-2">
                <Label htmlFor="street">Street Address</Label>
                <Input id="street" placeholder="123 Main St, Apt 4" value={address.street} onChange={(e) => setAddress({ ...address, street: e.target.value })} />
              </div>
              <div className="space-y-2 sm:col-span-2">
                <Label htmlFor="city">City</Label>
                <Input id="city" placeholder="New York" value={address.city} onChange={(e) => setAddress({ ...address, city: e.target.value })} />
              </div>
            </div>
          </motion.div>

          {/* Payment Method */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-card p-6 rounded-lg shadow-card mb-6"
          >
            <h3 className="font-display font-bold text-lg text-card-foreground mb-4">Payment Method</h3>
            <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="space-y-3">
              <label htmlFor="cod" className="flex items-center gap-3 p-3 rounded-lg border border-border hover:border-primary/50 cursor-pointer transition-colors has-[:checked]:border-primary has-[:checked]:bg-primary/5">
                <RadioGroupItem value="cod" id="cod" />
                <Banknote className="w-5 h-5 text-muted-foreground" />
                <div>
                  <p className="font-medium text-sm text-card-foreground">Cash on Delivery</p>
                  <p className="text-xs text-muted-foreground">Pay when your order arrives</p>
                </div>
              </label>
              <label htmlFor="card" className="flex items-center gap-3 p-3 rounded-lg border border-border hover:border-primary/50 cursor-pointer transition-colors has-[:checked]:border-primary has-[:checked]:bg-primary/5">
                <RadioGroupItem value="card" id="card" />
                <CreditCard className="w-5 h-5 text-muted-foreground" />
                <div>
                  <p className="font-medium text-sm text-card-foreground">Credit / Debit Card</p>
                  <p className="text-xs text-muted-foreground">Visa, Mastercard, Amex</p>
                </div>
              </label>
              <label htmlFor="wallet" className="flex items-center gap-3 p-3 rounded-lg border border-border hover:border-primary/50 cursor-pointer transition-colors has-[:checked]:border-primary has-[:checked]:bg-primary/5">
                <RadioGroupItem value="wallet" id="wallet" />
                <Wallet className="w-5 h-5 text-muted-foreground" />
                <div>
                  <p className="font-medium text-sm text-card-foreground">Digital Wallet</p>
                  <p className="text-xs text-muted-foreground">Apple Pay, Google Pay</p>
                </div>
              </label>
            </RadioGroup>
          </motion.div>

          {/* Order Total */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-card p-6 rounded-lg shadow-card"
          >
            <div className="space-y-3 text-sm mb-4">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Subtotal ({items.length} items)</span>
                <span className="font-medium">${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Delivery Fee</span>
                <span className="font-medium">${deliveryFee.toFixed(2)}</span>
              </div>
              <div className="border-t border-border pt-3 flex justify-between text-base">
                <span className="font-semibold">Total</span>
                <span className="font-bold text-primary">${total.toFixed(2)}</span>
              </div>
            </div>
            <button
              onClick={handleConfirmOrder}
              disabled={!address.name || !address.phone || !address.street || !address.city}
              className="w-full brand-gradient text-primary-foreground py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Confirm Order
            </button>
          </motion.div>
        </div>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center">
        <div className="text-center">
          <ShoppingBag className="w-16 h-16 text-muted-foreground/40 mx-auto mb-4" />
          <h2 className="text-2xl font-display font-bold text-foreground mb-2">Your cart is empty</h2>
          <p className="text-muted-foreground mb-6">Add some delicious items to get started</p>
          <Link
            to="/restaurants"
            className="inline-flex items-center gap-2 brand-gradient text-primary-foreground px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity"
          >
            Browse Restaurants
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <Link
          to="/restaurants"
          className="inline-flex items-center gap-1 text-muted-foreground text-sm mb-6 hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Continue shopping
        </Link>

        <h1 className="text-3xl font-display font-bold text-foreground mb-8">Your Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Items */}
          <div className="lg:col-span-2 space-y-4">
            <AnimatePresence>
              {items.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="flex gap-4 bg-card p-4 rounded-lg shadow-card"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded-lg shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-card-foreground">{item.name}</h3>
                    <p className="text-sm text-muted-foreground truncate">{item.description}</p>
                    <p className="font-bold text-primary mt-1">${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                  <div className="flex flex-col items-end justify-between shrink-0">
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-muted-foreground hover:text-destructive transition-colors p-1"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                    <div className="flex items-center gap-2 bg-muted rounded-full">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-1.5 hover:text-primary transition-colors"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="text-sm font-semibold w-6 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-1.5 hover:text-primary transition-colors"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Summary */}
          <div className="bg-card p-6 rounded-lg shadow-card h-fit sticky top-24">
            <h3 className="font-display font-bold text-lg text-card-foreground mb-4">Order Summary</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="font-medium">${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Delivery Fee</span>
                <span className="font-medium">${deliveryFee.toFixed(2)}</span>
              </div>
              <div className="border-t border-border pt-3 flex justify-between text-base">
                <span className="font-semibold">Total</span>
                <span className="font-bold text-primary">${total.toFixed(2)}</span>
              </div>
            </div>
            <button
              onClick={handleProceedToPayment}
              className="w-full brand-gradient text-primary-foreground py-3 rounded-lg font-semibold mt-6 hover:opacity-90 transition-opacity"
            >
              Proceed to Checkout
            </button>
            <button
              onClick={clearCart}
              className="w-full text-muted-foreground text-sm mt-3 hover:text-destructive transition-colors"
            >
              Clear Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
