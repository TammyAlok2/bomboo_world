"use client"
import { useCategoryStore } from "@/stores/categoryStore";
import Image from "next/image";
import React from "react";

const ProductCategory = () => {
  const { allCategory, category } = useCategoryStore();
  const isLoading = !category || category.length === 0;

  // Shimmer loading component
  const ShimmerItem = () => (
    <div className="flex flex-col items-center animate-pulse">
      <div className="relative w-[4rem] h-[4rem] lg:w-[5rem] lg:h-[5rem] xl:w-[6rem] xl:h-[6rem] max-[446px]:w-[6rem] max-[446px]:h-[6rem] rounded-full overflow-hidden bg-gray-200">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-[shimmer_1.5s_infinite]" />
      </div>
     
    </div>
  );

  return (
    <div className="bg-white py-8 mb-[3rem] mt-[1rem]">
      <h2 className="text-center text-[1.6rem] font-bold mb-10 max-[446px]:text-[1.3rem]">
        PRODUCT BY CATEGORY
      </h2>
      <div className="flex justify-center gap-10 max-[446px]:gap-2 lg:gap-7 xl:gap-8 flex-wrap max-[446px]:grid max-[446px]:grid-cols-2 max-[446px]:w-[90%] max-[446px]:mx-auto">
        {isLoading ? (
          // Show shimmer loading effect
          <>
            {[...Array(6)].map((_, index) => (
              <ShimmerItem key={index} />
            ))}
          </>
        ) : (
          // Show actual content
          category?.map((category, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="relative w-[4rem] h-[4rem] lg:w-[5rem] lg:h-[5rem] xl:w-[6rem] xl:h-[6rem] bg-white border-[.2rem] max-[446px]:w-[6rem] max-[446px]:h-[6rem] rounded-full overflow-hidden">
                <Image
                  src={category?.image?.secure_url}
                  alt={category.name}
                  fill
                  className="object-cover object-fit w-full h-full scale-[0.5] hover:scale-[0.6]"
                />
              </div>
              <p className="mt-2 text-center text-l text-gray-700">
                {category.name}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ProductCategory;