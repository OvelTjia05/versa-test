"use client"

import React, { useState } from "react"
import { artworkData, designData } from "../lib/data/artwork"
import {
  ZoomIn,
  ZoomOut,
  RotateCcw,
  RotateCw,
  MousePointer2,
} from "lucide-react"
import { Button } from "./ui/button"

export function ArtworkCanvas() {
  const [zoom, setZoom] = useState(100)
  const [hoveredLayer, setHoveredLayer] = useState<number | null>(null)
  const [rotation, setRotation] = useState(0)

  // A4 proportion
  const canvasStyle = {
    aspectRatio: "210/297",
    width: "100%",
    maxWidth: "450px",
    transform: `scale(${zoom / 100}) rotate(${rotation}deg)`,
    transformOrigin: "center",
    transition: "transform 0.2s ease-out",
  }

  const handleZoomIn = () => setZoom((prev) => Math.min(prev + 10, 200))
  const handleZoomOut = () => setZoom((prev) => Math.max(prev - 10, 50))
  const handleReset = () => setZoom(100)

  const handleRotateCcw = () => setRotation((prev) => prev - 90)
  const handleRotateCw = () => setRotation((prev) => prev + 90)

  return (
    <div className="flex w-full flex-col items-center">
      {/* Viewport for Canvas */}
      <div className="relative flex min-h-[600px] w-full justify-center overflow-hidden rounded-2xl border border-gray-200 bg-gray-50/50 p-8">
        <div className="relative bg-white shadow-2xl" style={canvasStyle}>
          {/* Base Background Image */}
          <img
            src={artworkData.bgDesign}
            alt="Background"
            className="absolute inset-0 z-0 h-full w-full object-cover"
          />

          {/* Dynamic Layers */}
          {designData.label.map((label, index) => {
            if (!label || label === "-") return null

            const type = designData.type[index]
            const image = designData.image[index]
            const xAxis = designData.xAxis[index]
            const yAxis = designData.yAxis[index]
            const size = designData.size[index]
            const isEditable = type === "text" || type === "file"
            const isHovered = hoveredLayer === index

            // Positioning logic based on coordinates
            // Assuming xAxis/yAxis are center points of the elements in percentages
            // and size is roughly the width percentage.
            const layerStyle: React.CSSProperties = {
              position: "absolute",
              left: `${xAxis}%`,
              top: `${yAxis}%`,
              width: `${size}%`,
              transform: `translate(-50%, -50%)`, // Center at coordinates
              zIndex: 10 + index,
            }

            return (
              <div
                key={`layer-${index}`}
                style={layerStyle}
                className={`group cursor-pointer transition-all duration-200 ${isHovered ? "scale-[1.02] rounded-sm ring-2 ring-teal-500 ring-offset-2 ring-offset-transparent" : ""}`}
                onMouseEnter={() => setHoveredLayer(index)}
                onMouseLeave={() => setHoveredLayer(null)}
              >
                {/* Visual indicator for editable area */}
                {isEditable && (
                  <div
                    className={`pointer-events-none absolute -inset-1 rounded border border-dashed border-teal-500/50 transition-opacity ${isHovered ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}
                  />
                )}

                {/* Render Layer Image */}
                {image && (
                  <img
                    src={image}
                    alt={label}
                    className="pointer-events-none h-auto w-full drop-shadow-sm"
                  />
                )}

                {/* Tooltip on hover */}
                {isHovered && (
                  <div className="absolute -top-8 left-1/2 z-50 flex -translate-x-1/2 items-center gap-1 rounded bg-gray-900 px-2 py-1 text-[10px] font-bold whitespace-nowrap text-white shadow-lg">
                    <MousePointer2 className="h-3 w-3" />
                    Edit {label}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>

      {/* Toolbar Controls */}
      <div className="mt-6 flex items-center gap-2 rounded-xl border border-gray-100 bg-white p-2 shadow-sm">
        <Button
          variant="ghost"
          size="icon"
          onClick={handleRotateCcw}
          className="text-gray-500 hover:text-teal-600"
        >
          <RotateCcw className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={handleRotateCw}
          className="text-gray-500 hover:text-teal-600"
        >
          <RotateCw className="h-4 w-4" />
        </Button>
        <div className="mx-1 h-6 w-px bg-gray-200"></div>
        <Button
          variant="ghost"
          size="icon"
          onClick={handleZoomOut}
          className="text-gray-500 hover:text-teal-600"
        >
          <ZoomOut className="h-4 w-4" />
        </Button>
        <div className="min-w-[60px] rounded border border-gray-100 bg-gray-50 px-3 py-1 text-center text-sm font-medium text-gray-700">
          {zoom}%
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={handleZoomIn}
          className="text-gray-500 hover:text-teal-600"
        >
          <ZoomIn className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
