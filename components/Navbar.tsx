"use client";

import React from "react";
import { Search, Menu } from "lucide-react";
import { Button } from "./ui/button";

export function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 border-b bg-white sticky top-0 z-50">
      <div className="flex items-center gap-8">
        <div className="font-bold text-2xl text-teal-600 tracking-tighter">BIKIN.IN</div>
        <div className="hidden md:flex gap-6 text-sm font-medium text-gray-600">
          <a href="#" className="hover:text-teal-600 transition-colors">Explore Artwork</a>
          <a href="#" className="hover:text-teal-600 transition-colors">Other</a>
        </div>
      </div>
      
      <div className="flex-1 max-w-md mx-8 hidden lg:block">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input 
            type="text" 
            placeholder="Search..." 
            className="w-full pl-10 pr-12 py-2 rounded-full border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all text-sm"
          />
          <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1">
            <kbd className="px-1.5 py-0.5 text-[10px] font-medium bg-white border rounded text-gray-500 shadow-sm">Ctrl</kbd>
            <kbd className="px-1.5 py-0.5 text-[10px] font-medium bg-white border rounded text-gray-500 shadow-sm">K</kbd>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <Button variant="outline" className="hidden sm:flex border-teal-600 text-teal-600 hover:bg-teal-50 rounded-full px-6">
          Login
        </Button>
        <Button className="hidden sm:flex bg-teal-600 hover:bg-teal-700 text-white rounded-full px-6">
          Register
        </Button>
        <Button variant="ghost" size="icon" className="sm:hidden">
          <Menu className="w-5 h-5" />
        </Button>
      </div>
    </nav>
  );
}
