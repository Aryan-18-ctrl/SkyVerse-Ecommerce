import { createContext } from "react";

import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
// consumer
export let MyContext=createContext()


function ContextProvider({children}){
    const[product,setProduct]=useState([])
    const [filteredProducts, setFilteredProducts] = useState([]);
      const [singleProdData, setSingleProdData] = useState({});
const [cartItems,setCartItems] = useState(
  JSON.parse(localStorage.getItem("cartData")) || []
);
    const[isCartOpen,setIsCartOpen]=useState(false)
const [isLoading,setIsLoading]=useState(false)
let currUser=JSON.parse(localStorage.getItem("currentUser")
)
let addToCart=(e,elem)=>{
        e.stopPropagation(); 
let updatedCart=[...cartItems,{...elem,quantity:1,name:currUser?.name||""}]
  setCartItems(updatedCart)
  localStorage.setItem("cartData",JSON.stringify(updatedCart))
toast.success("Added to cart 🛒");
}


// API call products ...

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


  function itemIncre(e, elem) {
    e.stopPropagation();

    let updatedCart = cartItems.map((val) => {
      return elem.id === val.id
        ? { ...val, quantity: val.quantity + 1 }
        : val;
    });

    setCartItems(updatedCart);

    localStorage.setItem(
      "cartData",
      JSON.stringify(updatedCart)
    );
  }


  function itemDeccre(e, elem) {
    e.stopPropagation();

    let updatedCart = cartItems
      .map((val) => {
        return elem.id === val.id
          ? { ...val, quantity: val.quantity - 1 }
          : val;
      })
      .filter((item) => item.quantity > 0);


    setCartItems(updatedCart);

    localStorage.setItem(
      "cartData",
      JSON.stringify(updatedCart)
    );
  }



return <MyContext.Provider value={{product,setProduct,filteredProducts,setFilteredProducts,
singleProdData,setSingleProdData,cartItems,setCartItems,isCartOpen,setIsCartOpen ,addToCart,
getProductData,isLoading,setIsLoading,itemDeccre,itemIncre}}>
    {children}
</MyContext.Provider>
} 

export default ContextProvider