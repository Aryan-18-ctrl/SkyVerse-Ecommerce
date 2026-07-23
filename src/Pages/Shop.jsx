import React, { useState } from 'react'
import ShopFilterSearch from '../components/ShopFilterSearch'
import Products from '../components/Products'
import { MyContext } from '../Context/EcomContext'
import { useContext } from 'react'
const Shop = () => {
const {product}=useContext(MyContext)

  return (
    <div className='px-4 py-6 sm:px-6 sm:py-10 lg:px-10 flex flex-col gap-8'>
       
      <div>
        <h2 className="text-4xl font-bold  tracking-[1.5px] leading-tight text-heading">
          All Products
        </h2>

        <p className="mt-2 text-text">
{product.length} products found  </p>
      </div>
<ShopFilterSearch/>
<Products/>
     
    </div>


  )
}

export default Shop