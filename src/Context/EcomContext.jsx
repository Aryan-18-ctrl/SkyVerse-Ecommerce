import { createContext } from "react";

import { useState } from "react";
// consumer
export let MyContext=createContext()


function ContextProvider({children}){
    const[product,setProduct]=useState([])
    const [filteredProducts, setFilteredProducts] = useState([]);
      const [singleProdData, setSingleProdData] = useState({});
    

return <MyContext.Provider value={{product,setProduct,filteredProducts,setFilteredProducts,
singleProdData,setSingleProdData}}>
    {children}
</MyContext.Provider>
} 

export default ContextProvider