import React, {useContext, useState, useEffect} from 'react'
import { db } from '../../config/firebase'

const CartContext=React.createContext()

export function useCart() {
    return useContext(CartContext)
}


// Context Provider
export default function CartContextProvider({children}) {
    


    const [COLLECTION_NAME]=useState('Cart')
    const [cart,setCart] = useState([])
//    Values to be passed down as props
    const values= {
        cart,
        COLLECTION_NAME,
        addProductToCart,
        removeProductFromCart,
        getProductsFromCart,
        emptyCartProducts
       

    }

    // useEffect(()=>{
   
    // }
    function getProductsFromCart(){
        const items=JSON.parse(localStorage.getItem("Cart"))
        return items
             
    }


  
    // Second parameter is to increase or decrease count
    function addProductToCart(product,count=1) {
        // db.collection(COLLECTION_NAME).add({product})
        //Get the existing data from local storage
        let items=JSON.parse(localStorage.getItem("Cart"))
        //Check if it is null
        if(!items) items=[]

        //Check if the cart already contains the product
        const itm=items.find(p => p.id===product.id)
        if(itm) {
            // const id=items[{
            const idx=items.findIndex(p=>p.id===product.id)
            items[idx].count+=count;
            localStorage.setItem("Cart",JSON.stringify(items))
           
            
        } else {
             //Add the new product
            items.push(product)
            // console.log(items)
            localStorage.setItem("Cart",JSON.stringify(items))
            // setCart(items)
        }
  
    }

    function removeProductFromCart(product){
        const items=JSON.parse(localStorage.getItem("Cart"))
        const idx=items.findIndex(prd=>prd.id===product.id);
        // console.log("idx is ",idx)
        if(idx!=-1){
            items.splice(idx,1)
            // console.log(items)
            localStorage.setItem('Cart',JSON.stringify(items))
        }
        
        
    }

    function emptyCartProducts() {
        let items=JSON.parse(localStorage.getItem("Cart"))
        items=[]
        localStorage.setItem("Cart",JSON.stringify(items))
        // localStorage.clear()


    }


 
    
    return (
        <CartContext.Provider value={values}>
                {children}

        </CartContext.Provider>
    )
}
