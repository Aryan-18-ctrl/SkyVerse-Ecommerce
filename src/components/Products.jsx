import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import Loader from './Loader'
import { MyContext } from '../Context/EcomContext'
import ProductCard from './ProductCard'

const Products = () => {

const[isLoading,setIsLoading]=useState(false)

let {setProduct,filteredProducts,setFilteredProducts}=useContext(MyContext)
 let getProductData= async ()=>{
    setIsLoading(true)

try{
 let response=await axios.get(
    "https://fakestoreapi.com/products")

setProduct(response.data)
setFilteredProducts(response.data)
}
catch(error){
    console.log("error in fetching",error)

}
finally{
        setIsLoading(false)

}

 }

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
        return <ProductCard elem={elem} key={elem.id}/>
    })
}

    </div>
  )
}

export default Products