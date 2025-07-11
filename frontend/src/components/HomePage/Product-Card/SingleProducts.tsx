'use client';

import ProductCard from "@/components/Card/ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useCartStore } from "@/stores/cartStore";
import { useEffect, useState, useMemo } from "react";
import { useProductDataStore } from "@/stores/productStore";
import { Toaster, toast } from 'react-hot-toast';

interface SingleProductsProps {
  category?: { _id?: any };
  ribbon?: boolean;
  showSliderButton?: boolean;
}

interface Product {
  _id: string; // Unique identifier for the product
  id: string;  // Alternate unique identifier
  name: string; // Product name
  image: string; // Primary product image
  price: number; // Product price
  description: string; // Product description
  rating: number; // Product rating
  ribbon?: boolean; // Optional ribbon property
  category: { _id: string }; // Category object with its own ID
  images?: string[]; // Array of additional images
  ArrayImages?: string[]; // Another array of images (if needed)
  [key: string]: any; // Allow for additional optional fields
  WishList:any;
}

export default function SingleProducts({
  category,
  ribbon = false,
  showSliderButton = false,
}: SingleProductsProps) {
  
  const { product } = useProductDataStore();
  //  console.log("products: ", product)

  // Use useMemo to memoize filtered products   
  const filteredProducts = useMemo(() => {
    // Add null/undefined checks     
    if (!category || !category?._id) return [];
    return product.filter((prod) => prod?.category?._id == category._id);
  }, [product, category]);
  // console.log("filteredProducts: ", filteredProducts)

  const addItemToCart:any = useCartStore((state) => state.addItem);

  const handleAddToCart = (product: Product) => {
    try {
      addItemToCart(product);
      toast.success(`${product.name} added to cart`);
    } catch (error) {
      toast.error('Failed to add product to cart', {
        duration: 2000,
        position: 'top-center',
      });
    }
  };


  return (
    <>
    <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          // Default options for all toasts
          duration: 2000,
          style: {
            background: '#363636',
            color: '#fff',
          },
        }}
      />
    <div className="relative flex flex-wrap justify-center gap-6 my-6 bg-white">
      {filteredProducts.length > 0 ? (
        <Swiper
          spaceBetween={20}
          slidesPerView={4}
          navigation={showSliderButton}
          autoplay={{
            delay: 4000, // Auto-slide every 2 seconds
            disableOnInteraction: false, // Continue autoplay after user interaction
          }}
          modules={[Autoplay, Pagination, Navigation]}
          breakpoints={{
            280: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            997: { slidesPerView: 3 },
            1373: {slidesPerView: 4},
            1480: { slidesPerView: 4 },
            1580: { slidesPerView: 5 },
          }}
          className="custom-width"
        >
          {filteredProducts.map((prod, index) => (
            <SwiperSlide
              key={index}
              style={{
                display: "flex", marginRight: ".1rem", gap: '4rem',
                flex: "0 0 auto", width: "20rem",
              }}
              className="swiperSlide"
            >
            <ProductCard
              key={prod._id}
              product={prod}
              ribbon={ribbon}
              onAddToCart={() => handleAddToCart(prod)}
            />

            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className="w-full text-center py-10 text-gray-500">
          No products yet in this category
        </div>
      )}
    </div>
    </>
  );
}