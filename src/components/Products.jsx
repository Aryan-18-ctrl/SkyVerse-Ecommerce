import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import Loader from './Loader'
import { MyContext } from '../Context/EcomContext'
import ProductCard from './ProductCard'

const Products = () => {
let{cartItems}=useContext(MyContext)


let {filteredProducts,getProductData,isLoading}=useContext(MyContext)


useEffect(()=>{
    getProductData()

},[])


if(isLoading){
    return <Loader/>
}


return (
    <div className="grid lg:grid-cols-4 sm:grid-cols-3 gap-6">


{
filteredProducts?.map((elem)=>{
   let isInCart= cartItems.find((val)=>{
      return  val.id===elem.id
    })
        return <ProductCard elem={elem} key={elem.id} isInCart={isInCart}/>
    })
}

    </div>
  )
}

export default Products