import Link from 'next/link'
import React from 'react'

const ViewAllProductButton = () => {
  return (
    <Link href={"/allproducts"}>
      <button type="button" className="text-white bg-gradient-to-r from-red via-red to-orange hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-red dark:focus:ring-red shadow-lg dark:shadow-lg font-small rounded-lg text-md max-xs:px-5 max-xs:py-2 sm:px-4 sm:py-2 md:px-5 xs:px-5 xs:py-2 lg:px-8 xl:px-8 lg:py-2.3 text-center mb-2">View All</button>
    </Link>
  )
}

export default ViewAllProductButton


