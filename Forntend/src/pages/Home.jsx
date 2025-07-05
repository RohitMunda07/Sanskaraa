import React from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  User,
  Package,
  Smile,
  ShoppingCart,
  Home,
  Search,
  Bookmark,
  Menu,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen pb-24 p-6 bg-gradient-to-br from-[#F5F7FA] via-[#EBEDF0] to-[#DDE3E9] font-sans text-[#2E2E2E] space-y-6 relative">
      {/* Header */}
      <header className="flex justify-between items-center">
        <motion.h2
          className="text-2xl font-semibold"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          Welcome, Avinash
        </motion.h2>
        <motion.img
          src="/assets/logo-icon.png"
          alt="Logo"
          className="h-10 w-10 rounded-full border border-gray-300 shadow-sm"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
      </header>

      {/* App Logo + Tagline */}
      <motion.div
        className="bg-white rounded-xl p-5 flex flex-col items-center shadow-md border border-gray-200"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <img src="/assets/logo-icon.png" alt="Sanskaraa Logo" className="h-14 w-14 mb-2 rounded-full" />
        <h1 className="text-3xl font-bold text-gray-800">Sanskaraa</h1>
        <p className="text-sm text-gray-500 mt-1">Your Ritual Partner</p>
      </motion.div>

      {/* Feature Buttons */}
      <motion.div
        className="grid grid-cols-2 gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <FeatureButton icon={<Calendar size={28} />} label="Book Event" />
        <FeatureButton icon={<User size={28} />} label="Book Pandit" />
        <FeatureButton icon={<Package size={28} />} label="Puja Kits" />
        <FeatureButton icon={<Smile size={28} />} label="Services" />
      </motion.div>

      {/* Griha Pravesh */}
      <motion.div
        className="rounded-xl p-5 bg-gradient-to-r from-[#CBD5E1] to-[#E2E8F0] text-gray-900 shadow-md text-center border border-gray-300"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <h3 className="text-xl font-semibold">Griha Pravesh Booking</h3>
        <p className="text-sm mt-1">Elegant services for sacred moments</p>
      </motion.div>

      {/* Pandit Ji Profile */}
      <motion.section
        className="space-y-3"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <h3 className="text-lg font-medium text-gray-800">Pandit Ji Profile</h3>
        <div className="bg-white rounded-xl p-4 shadow-sm space-y-2 border border-gray-200">
          <img src="/assets/pandit-profile.jpg" alt="Pandit Ji" className="rounded-lg w-full h-36 object-cover" />
          <p className="text-base font-semibold">Pandit Ram Sharma</p>
          <p className="text-sm text-gray-500">Specializes in Satyanarayan, Griha Pravesh, Marriage</p>
          <div className="flex justify-between">
            <button className="border border-gray-400 px-4 py-1 rounded text-gray-700">Call</button>
            <button className="bg-gray-700 text-white px-4 py-1 rounded">Book</button>
          </div>
        </div>
      </motion.section>

      {/* Puja Kits */}
      <motion.section
        className="space-y-3"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <h3 className="text-lg font-medium text-gray-800">Puja Kits</h3>
        <div className="grid grid-cols-2 gap-4">
          <KitCard title="Grih Pravesh Kit" price="₹999" />
          <KitCard title="Satyanarayan Kit" price="₹799" />
        </div>
      </motion.section>

      {/* Booking Summary */}
      <motion.section
        className="bg-white p-4 rounded-xl shadow-sm space-y-2 border border-gray-200"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <h3 className="text-lg font-medium text-gray-800">Booking Summary</h3>
        <p className="text-sm text-gray-600">Satyanarayan Puja on Apr 25, 2024</p>
        <p className="text-sm">10:00 AM, Ranchi, Jharkhand</p>
        <button className="w-full bg-gray-700 text-white py-2 rounded">Confirm Booking</button>
      </motion.section>

      {/* Floating Cart Button */}
      <motion.div
        className="fixed bottom-20 right-5 z-50"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6 }}
      >
        <button className="bg-gray-800 text-white rounded-full p-3 shadow-lg">
          <ShoppingCart size={22} />
        </button>
      </motion.div>

      {/* Bottom Tab Navigation */}
      <nav className="fixed bottom-0 inset-x-0 bg-white border-t border-gray-200 shadow-sm flex justify-around items-center h-16 z-40">
        <NavItem icon={<Home size={20} />} label="Home" />
        <NavItem icon={<Search size={20} />} label="Search" />
        <NavItem icon={<Package size={20} />} label="Kits" />
        <NavItem icon={<Bookmark size={20} />} label="Bookings" />
        <NavItem icon={<Menu size={20} />} label="More" />
      </nav>
    </main>
  );
}

// Feature Button Component
function FeatureButton({ icon, label }) {
  return (
    <motion.button
      className="bg-white border border-gray-200 rounded-xl p-4 text-center shadow-sm hover:shadow transition-all"
      whileTap={{ scale: 0.95 }}
    >
      <div className="flex flex-col items-center gap-2">
        <div className="text-gray-600">{icon}</div>
        <span className="text-sm font-medium text-gray-700">{label}</span>
      </div>
    </motion.button>
  );
}

// Kit Card Component
function KitCard({ title, price }) {
  return (
    <motion.div
      className="bg-gray-50 p-4 rounded-xl shadow-sm text-gray-800 border border-gray-200"
      whileHover={{ scale: 1.02 }}
    >
      <h4 className="font-medium text-sm">{title}</h4>
      <p className="text-xs text-gray-500">{price}</p>
      <button className="mt-3 w-full bg-gray-700 text-white text-sm py-1 rounded">Add to Cart</button>
    </motion.div>
  );
}

// Bottom Navigation Item
function NavItem({ icon, label }) {
  return (
    <button className="flex flex-col items-center text-xs text-gray-600 hover:text-black">
      {icon}
      <span>{label}</span>
    </button>
  );
}
