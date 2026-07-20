import React from 'react'
import axios from 'axios'
const CategoryBased = () => {
async function getCategoryData(){

let response=await axios.get("https://fakestoreapi.com/products/category/jewelery")
console.log(response)


}

getCategoryData()

  return (
    <div>CategoryBased</div>
  )
}

export default CategoryBased