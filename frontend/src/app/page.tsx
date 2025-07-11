// import Login from '@/components/Login'
'use client'
import ProductCategory from '@/components/HomePage/Category/ProductCategory'
import Testimonials from '@/components/HomePage/Testimonials'
import Blog from '@/components/HomePage/Blog'
import React, { useEffect } from 'react'
import FullScreenCarousel from '@/components/HomePage/Carousel/Carousel'
import Contact from '@/components/HomePage/Contact'
import WhyChooseUs from '@/components/HomePage/WhyChooseUs'
import Products from '@/components/HomePage/Product-Card/Products'
import FAQ from '@/components/HomePage/Faq/Index'
import { useProductDataStore } from '@/stores/productStore'
import { useCategoryStore } from '@/stores/categoryStore'
import { useAuthStore } from '@/stores/authStore'
import 'react-toastify/dist/ReactToastify.css';
// import ProductPage from '@/app/singleproduct/SingleProduct'
// import SingleProducts from '@/components/HomePage/Product-Card/SingleProducts'


const Home = () => {

  // calling all the category and products here 
  const { allCategory } = useCategoryStore()
  const { allProduct }: any = useProductDataStore()



  useEffect(() => {
    allCategory()
    allProduct()
  }, [])

  return (

    <>
      <div>
        <FullScreenCarousel />
      </div>
      <div className='w-[90%] mx-auto'>
        <ProductCategory />

        {/* <SingleProducts /> */}
        <Products />
        {/* <Products /> */}
        <WhyChooseUs />
        <FAQ />
        <Testimonials />
        <Blog />
        <Contact />
      </div>
    </>
  )
}

export default Home
