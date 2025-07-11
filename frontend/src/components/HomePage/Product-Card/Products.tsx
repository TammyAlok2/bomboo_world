'use client'
import React from 'react';
import SingleProducts from './SingleProducts';
import ViewAllProductButton from './ViewAllButton/ViewAllProductButton';
import { useCategoryStore } from '@/stores/categoryStore';
import { useProductDataStore } from '@/stores/productStore';
import { useState } from 'react';


const Products = () => {
  const {category} = useCategoryStore()
  const [categoryData,setCategoryData] = useState([])
 
  return (
    <div>
      {category?.slice(0,4)?.map((item, index) => (
        <div key={index} className="mb-8">
          <h1 className=" my-[2rem] font-semibold text-[1.6rem] mx-auto max-[640px]:w-[80%] sm:w-[90%] md:w-[90%] lg:w-[90%]">{item.name.toUpperCase()}</h1>
          <SingleProducts category={item} ribbon={item.ribbon} showSliderButton={item.showSliderButton} />
          <div className="flex items-center justify-center">
            <ViewAllProductButton />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
