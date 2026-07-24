import { createContext } from "react";

import { useState } from "react";
import toast from "react-hot-toast";
// consumer
export let MyContext=createContext()


function ContextProvider({children}){
    const[product,setProduct]=useState([])
    const [filteredProducts, setFilteredProducts] = useState([]);
      const [singleProdData, setSingleProdData] = useState({});
    const[cartItems,setCartItems]=useState([])
    const[isCartOpen,setIsCartOpen]=useState(false)


let addToCart=(e,elem)=>{
        e.stopPropagation(); 

  setCartItems([...cartItems,{...elem,quantity:1}])
toast.success("Added to cart 🛒");
}

return <MyContext.Provider value={{product,setProduct,filteredProducts,setFilteredProducts,
singleProdData,setSingleProdData,cartItems,setCartItems,isCartOpen,setIsCartOpen ,addToCart}}>
    {children}
</MyContext.Provider>
} 

export default ContextProvider