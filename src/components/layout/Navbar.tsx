"use client";

import Link from "next/link";
import { useState } from "react";
import { Search, ShoppingCart, User, Menu, X, Globe } from "lucide-react";
import { useAuthStore, useCartStore } from "@/lib/store";
import { cn } from "@/utils/utils";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, isAuthenticated } = useAuthStore();
  const { totalItems } = useCartStore();

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-8">
            <Link href="/" className="text-2xl font-bold text-indigo-600">
              UdemyClone
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6">
              <Link href="/courses" className="text-sm font-medium text-gray-700 hover:text-indigo-600 transition-colors">
                Categories
              </Link>
              <div className="relative w-96">
                <input
                  type="text"
                  placeholder="Search for anything..."
                  className="w-full rounded-full border border-gray-300 bg-gray-100 py-2 pl-10 pr-4 text-sm focus:border-indigo-600 focus:outline-none transition-all"
                />
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
              </div>
            </div>
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <Link href="/instructor" className="text-sm font-medium text-gray-700 hover:text-indigo-600 transition-colors">
              Teach on UdemyClone
            </Link>

            <Link href="/cart" className="relative p-2 text-gray-700 hover:bg-gray-100 rounded-full transition-all">
              <ShoppingCart className="h-5 w-5" />
              {totalItems > 0 && (
                <span className="absolute top-0 right-0 flex h-4 w-4 items-center justify-center rounded-full bg-indigo-600 text-[10px] font-bold text-white">
                  {totalItems}
                </span>
              )}
            </Link>

            {isAuthenticated ? (
              <Link href="/dashboard" className="flex items-center gap-2 rounded-full border border-gray-300 p-1 hover:shadow-md transition-all">
                <div className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
                  <User className="h-5 w-5" />
                </div>
              </Link>
            ) : (
              <div className="flex items-center gap-2">
                <Link href="/login" className="rounded-md px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-100 transition-all">
                  Log in
                </Link>
                <Link href="/signup" className="rounded-md bg-gray-900 px-4 py-2 text-sm font-semibold text-white hover:bg-gray-800 transition-all">
                  Sign up
                </Link>
                <button className="p-2 border border-gray-300 rounded-md hover:bg-gray-100 transition-all">
                  <Globe className="h-5 w-5" />
                </button>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-4">
            <Link href="/cart" className="relative p-2 text-gray-700">
              <ShoppingCart className="h-5 w-5" />
              {totalItems > 0 && (
                <span className="absolute top-0 right-0 flex h-4 w-4 items-center justify-center rounded-full bg-indigo-600 text-[10px] font-bold text-white">
                  {totalItems}
                </span>
              )}
            </Link>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-700"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for anything..."
                  className="w-full rounded-md border border-gray-300 bg-gray-100 py-2 pl-10 pr-4 text-sm"
                />
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
              </div>
              <nav className="flex flex-col gap-4">
                <Link href="/courses" className="text-lg font-medium">Categories</Link>
                <Link href="/instructor" className="text-lg font-medium">Teach on UdemyClone</Link>
                <hr />
                {!isAuthenticated ? (
                  <>
                    <Link href="/login" className="text-lg font-medium">Log in</Link>
                    <Link href="/signup" className="text-lg font-medium text-indigo-600">Sign up</Link>
                  </>
                ) : (
                  <Link href="/dashboard" className="text-lg font-medium">My Dashboard</Link>
                )}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
