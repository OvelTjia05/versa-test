"use client"

import React, { useState } from "react"
import { artworkData } from "../lib/data/artwork"
import { Heart, Eye, Tag } from "lucide-react"
import { Button } from "./ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { RadioGroup, RadioGroupItem } from "./ui/radio-group"

export function ArtworkSidebar() {
  const [selectedPackage, setSelectedPackage] = useState("edit-content")
  const [isWishlist, setIsWishlist] = useState(false)

  const handleWishlist = () => {
    setIsWishlist(!isWishlist)
  }

  return (
    <Card className="flex flex-col rounded-2xl border-gray-100 bg-white shadow-sm">
      {/* Header Info */}
      <CardHeader className="pb-4">
        <div className="mb-2 flex items-start justify-between gap-4">
          <CardTitle className="text-2xl leading-tight font-bold text-gray-900">
            {artworkData.title}
          </CardTitle>
          <button
            className="flex-shrink-0 rounded-full p-2 text-gray-400 transition-colors hover:bg-red-50 hover:text-red-500"
            onClick={handleWishlist}
          >
            <Heart className="h-6 w-6" fill={isWishlist ? "red" : "none"} />
          </button>
        </div>
        <div className="flex items-center gap-4 text-sm font-medium text-gray-500">
          <span className="flex items-center gap-1">
            <ShoppingCart className="h-4 w-4" /> Terjual 0 Produk
          </span>
          <span className="flex items-center gap-1">
            <Eye className="h-4 w-4" /> {artworkData.views} views
          </span>
        </div>
      </CardHeader>

      <CardContent className="flex flex-col gap-6">
        {/* Description */}
        <div
          className="prose prose-sm max-w-none text-sm leading-relaxed text-gray-600"
          dangerouslySetInnerHTML={{ __html: artworkData.description }}
        />

        {/* Metadata Grid */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-4 border-y border-gray-100 py-4">
          <div className="flex flex-col gap-1">
            <span className="text-xs font-semibold tracking-wider text-gray-400 uppercase">
              SKU
            </span>
            <span className="text-sm font-medium text-gray-900">
              {artworkData.sku}
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-xs font-semibold tracking-wider text-gray-400 uppercase">
              Design by
            </span>
            <span className="cursor-pointer text-sm font-medium text-teal-600 hover:underline">
              {artworkData.users.code}
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-xs font-semibold tracking-wider text-gray-400 uppercase">
              Orientasi
            </span>
            <span className="text-sm font-medium text-gray-900 capitalize">
              {artworkData.orientasi} ({artworkData.sisi})
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-xs font-semibold tracking-wider text-gray-400 uppercase">
              Skala
            </span>
            <span className="flex items-center gap-1 text-sm font-medium text-gray-900">
              {artworkData.skala.title}
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-xs font-semibold tracking-wider text-gray-400 uppercase">
              Shape
            </span>
            <span className="text-sm font-medium text-gray-900">
              {artworkData.shape.title}
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-xs font-semibold tracking-wider text-gray-400 uppercase">
              Product
            </span>
            <span className="flex cursor-pointer items-center gap-1 text-sm font-medium text-teal-600 hover:underline">
              <Tag className="h-3 w-3" /> Flyer
            </span>
          </div>
        </div>

        {/* Packages */}
        <div className="space-y-4">
          <h3 className="font-semibold text-gray-900">Pilih Paket</h3>

          <RadioGroup
            value={selectedPackage}
            onValueChange={setSelectedPackage}
            className="space-y-3"
          >
            {/* Package 1 */}
            <label
              htmlFor="edit-content"
              className={`flex cursor-pointer items-start gap-3 rounded-xl border-2 p-4 transition-all ${selectedPackage === "edit-content" ? "border-teal-500 bg-teal-50/50" : "border-gray-100 bg-white hover:border-gray-200"}`}
            >
              <RadioGroupItem
                value="edit-content"
                id="edit-content"
                className="mt-0.5"
              />
              <div className="flex-1">
                <div className="mb-1 flex items-center justify-between">
                  <span className="font-semibold text-gray-900">
                    Edit Content
                  </span>
                  <span className="font-bold text-teal-600">Free</span>
                </div>
                <p className="text-xs leading-relaxed text-gray-500">
                  Hanya merubah Editable Area yang sudah ditentukan seperti
                  konten Text/Logo/Foto (Maksimal 3x Revisi)
                </p>
              </div>
            </label>

            {/* Package 2 */}
            <label
              htmlFor="edit-artwork"
              className={`flex cursor-pointer items-start gap-3 rounded-xl border-2 p-4 transition-all ${selectedPackage === "edit-artwork" ? "border-teal-500 bg-teal-50/50" : "border-gray-100 bg-white hover:border-gray-200"}`}
            >
              <RadioGroupItem
                value="edit-artwork"
                id="edit-artwork"
                className="mt-0.5"
              />
              <div className="flex-1">
                <div className="mb-1 flex items-center justify-between">
                  <span className="font-semibold text-gray-900">
                    Edit Artwork
                  </span>
                  <span className="font-bold text-teal-600">Rp. 50.000</span>
                </div>
                <p className="text-xs leading-relaxed text-gray-500">
                  Merubah orientasi artwork menjadi Landscape atau Portrait,
                  Merubah skala sesuai ukuran yang kamu butuhkan, Merubah tone
                  warna, Merubah jenis font, Merubah posisi Text/Logo/Foto
                  (Maksimal 3x Revisi)
                </p>
              </div>
            </label>

            {/* Package 3 */}
            <label
              htmlFor="req-design"
              className={`flex cursor-pointer items-start gap-3 rounded-xl border-2 p-4 transition-all ${selectedPackage === "req-design" ? "border-teal-500 bg-teal-50/50" : "border-gray-100 bg-white hover:border-gray-200"}`}
            >
              <RadioGroupItem
                value="req-design"
                id="req-design"
                className="mt-0.5"
              />
              <div className="flex-1">
                <div className="mb-1 flex items-center justify-between">
                  <span className="font-semibold text-gray-900">
                    Request Design Baru
                  </span>
                  <span className="font-bold text-teal-600">Rp. 150.000</span>
                </div>
                <p className="text-xs leading-relaxed text-gray-500">
                  Membuat Artwork baru sesuai dengan selera dan kebutuhan kamu
                  (Maksimal 3x Revisi)
                </p>
              </div>
            </label>
          </RadioGroup>
        </div>

        <Button className="mt-2 w-full rounded-xl bg-teal-600 py-6 text-lg font-semibold text-white shadow-lg shadow-teal-500/20 transition-all hover:bg-teal-700">
          Place Order
        </Button>
      </CardContent>
    </Card>
  )
}

// Missing icon import hack
function ShoppingCart(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  )
}
