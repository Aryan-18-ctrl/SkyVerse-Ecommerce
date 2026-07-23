import React, { useContext } from 'react'
import { useEffect,useState } from 'react';
import SingleProductDetail from '../components/SingleProductDetail'
import RelatedProducts from '../components/RelatedProducts'
import { useParams } from "react-router";
import axios from "axios";
import { NavLink } from "react-router";
import { MyContext } from '../Context/EcomContext';
const ProductDetail = () => {

let {singleProdData,setSingleProdData}=useContext(MyContext)

  const { id } = useParams();


async function getSingleProductData() {
  try {
    const response = await axios.get(
      `https://fakestoreapi.com/products/${id}`
    );

    setSingleProdData(response.data);
  } catch (error) {
    console.error(error);
  }
}

  useEffect(() => {
    getSingleProductData();
  }, [id]);

  return (
    <div>
        <SingleProductDetail id={id}/>
<RelatedProducts/>
    </div>

  )
}

export default ProductDetail