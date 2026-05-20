"use client";

import React from "react";
import { Search, Menu } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image"

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between border-b bg-white px-6 py-4">
      <div className="flex items-center gap-8">
        <div className="text-2xl font-bold tracking-tighter text-teal-600">
          <img
            src={
              "https://bikin.in/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fbikin.in%2Fupload%2F1747284425032-logo-bikinin-primary.webp&w=256&q=75"
            }
            className="h-auto"
            alt="Bikin Logo"
          />
        </div>
        <div className="hidden gap-6 text-sm font-medium text-gray-600 md:flex">
          <a href="#" className="transition-colors hover:text-teal-600">
            Explore Artwork
          </a>
          <a href="#" className="transition-colors hover:text-teal-600">
            Other
          </a>
        </div>
      </div>

      <div className="mx-8 hidden max-w-md flex-1 lg:block">
        <div className="relative">
          <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full rounded-full border border-gray-200 bg-gray-50 py-2 pr-12 pl-10 text-sm text-background transition-all focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 focus:outline-none"
          />
          {/* <div className="absolute top-1/2 right-3 flex -translate-y-1/2 items-center gap-1">
            <kbd className="rounded border bg-white px-1.5 py-0.5 text-[10px] font-medium text-gray-500 shadow-sm">
              Ctrl
            </kbd>
            <kbd className="rounded border bg-white px-1.5 py-0.5 text-[10px] font-medium text-gray-500 shadow-sm">
              K
            </kbd>
          </div> */}
        </div>
      </div>

      <div className="flex items-center gap-4">
        <Button
          variant="outline"
          className="hidden rounded-full border-teal-600 px-6 text-teal-600 hover:bg-teal-50 sm:flex"
        >
          Login
        </Button>
        <Button className="hidden rounded-full bg-teal-600 px-6 text-white hover:bg-teal-700 sm:flex">
          Register
        </Button>
        <Button variant="ghost" size="icon" className="sm:hidden">
          <Menu className="h-5 w-5" />
        </Button>
      </div>
    </nav>
  )
}
