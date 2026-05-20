"use client"

import { useState } from "react"
import { Navbar } from "@/components/Navbar"
import { ArtworkCanvas } from "@/components/ArtworkCanvas"
import { ArtworkSidebar } from "@/components/ArtworkSidebar"
import { MessageCircle } from "lucide-react"
import { artworkData } from "@/lib/data/artwork"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Page() {
  const [activeView, setActiveView] = useState<"custom" | "preview1">("custom")

  return (
    <div className="min-h-screen bg-[#f8fafc] pb-20 font-sans selection:bg-teal-100 selection:text-teal-900">
      <Navbar />

      <main className="mx-auto max-w-[1400px] px-6 py-8">
        <div className="relative grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Left Column: Canvas Workspace */}
          <div className="flex gap-6 lg:col-span-8">
            {/* Thumbnail Sidebar */}
            <div className="hidden w-24 flex-shrink-0 flex-col gap-3 sm:flex">
              <button
                onClick={() => setActiveView("custom")}
                className={`group relative flex aspect-[4/3] w-full flex-col items-center justify-center gap-1 overflow-hidden rounded-xl border-2 shadow-sm transition-all ${
                  activeView === "custom"
                    ? "border-teal-500 ring-2 ring-teal-500/20"
                    : "border-transparent hover:border-gray-300"
                }`}
              >
                <img
                  src={artworkData.bgDesign}
                  alt="Custom"
                  className="absolute inset-0 h-full w-full object-cover opacity-50 grayscale transition-all group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-white/60" />
                <span className="z-10 rounded bg-white/80 px-2 py-0.5 text-[10px] font-bold text-gray-800 shadow-sm">
                  Custom
                </span>
                <div
                  className={`absolute inset-0 bg-teal-500/10 transition-opacity ${
                    activeView === "custom"
                      ? "opacity-100"
                      : "opacity-0 group-hover:opacity-100"
                  }`}
                ></div>
              </button>

              <button
                onClick={() => setActiveView("preview1")}
                className={`group relative flex aspect-[4/3] w-full flex-col items-center justify-center gap-1 overflow-hidden rounded-xl border-2 shadow-sm transition-all ${
                  activeView === "preview1"
                    ? "border-teal-500 ring-2 ring-teal-500/20"
                    : "border-transparent hover:border-gray-300"
                }`}
              >
                <img
                  src={artworkData.images[0]}
                  alt="Preview 1"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div
                  className={`absolute inset-0 bg-teal-500/10 transition-opacity ${
                    activeView === "preview1"
                      ? "opacity-100"
                      : "opacity-0 group-hover:opacity-100"
                  }`}
                ></div>
              </button>
            </div>

            {/* Main Canvas Editor or Preview */}
            <Card className="flex flex-1 flex-col overflow-hidden rounded-2xl border-gray-100 bg-white shadow-sm">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
                <CardTitle className="text-lg font-semibold text-gray-800">
                  {activeView === "custom" ? "Custom Editable Design" : "Preview 1"}
                </CardTitle>
                <div className="flex gap-2">
                  <span className="inline-flex items-center rounded-full bg-teal-100 px-2.5 py-0.5 text-xs font-medium text-teal-800">
                    {activeView === "custom" ? "Live Preview" : "Mockup"}
                  </span>
                </div>
              </CardHeader>

              <CardContent className="flex-1 pb-6">
                {activeView === "custom" ? (
                  <ArtworkCanvas />
                ) : (
                  <div className="relative flex min-h-[600px] w-full items-center justify-center overflow-hidden rounded-2xl border border-gray-200 bg-gray-50/50 p-8">
                    <img
                      src={artworkData.images[0]}
                      alt="Preview 1"
                      className="max-h-[600px] w-auto max-w-full rounded-xl object-contain shadow-md"
                    />
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Right Column: Sidebar */}
          <div className="space-y-6 lg:col-span-4">
            <div className="sticky top-24">
              <ArtworkSidebar />

              {/* Mock Comments Section */}
              <div className="mt-6 cursor-pointer rounded-xl border border-gray-100 bg-white p-4 shadow-sm transition-colors hover:border-gray-200">
                <div className="flex items-center justify-between font-semibold text-gray-800">
                  <span>Komentar (0)</span>
                  <span className="text-gray-400">+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Floating Action Button */}
      <button className="fixed right-8 bottom-8 z-50 flex items-center gap-2 rounded-full bg-teal-600 px-5 py-3 text-white shadow-xl transition-all hover:scale-105 hover:bg-teal-700 active:scale-95">
        <MessageCircle className="h-5 w-5" />
        <span className="text-sm font-bold">Tanya Kinin?</span>
      </button>
    </div>
  )
}
