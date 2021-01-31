import React, {useContext, useState, useEffect} from 'react'
import { db } from '../../config/firebase'

const CartContext=React.createContext()

export function useCart() {
    return useContext(CartContext)
}


// Context Provider
export default function CartContextProvider({children}) {
    


    const [COLLECTION_NAME]=useState('cart21')
    
    const values= {
        COLLECTION_NAME,
        addProductToCart,

    }



    

    function addProductToCart(product) {
        db.collection(COLLECTION_NAME).add({product})
            // .then(docRef=>{

            // })
            // .catch(err=>{
                
            // })
    }



    //Edit function to increase count of [product]
    function editProductCount(product,count){
        
    }
    
    
    return (
        <CartContext.Provider value={values}>
                {children}

        </CartContext.Provider>
    )
}
