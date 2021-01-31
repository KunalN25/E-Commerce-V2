import React, {useEffect,useState} from 'react'
import {useCart} from './Context/CartContext'
// import ProductItem from './Products/ProductItem';
import CartItem from './Products/CartItem';
import {db} from '.././config/firebase'

export default function Cart() {

    const [cartArrange, setCart]=useState({
        cart:[],
        arrange:[]
    })
    const {COLLECTION_NAME}=useCart()


    function getCartProducts() {
        let items=[]
  
            db.collection(COLLECTION_NAME).get().then((query)=>{
                query.forEach((doc)=>{//Loop through each document
                    // console.log('Doc data ', doc.data().product)
                    items.push(doc.data().product)
                })
                const arrrange=[]
                    for(let i=0;i<items.length;i+=3) {
                    arrrange.push(i)
                }
                setCart({
                    cart: items,
                    arrange: arrrange
                })
                
            })  
       
        
    }


    useEffect(()=>{
        console.log('useffect called')
        getCartProducts()
    },[])
  

 
    return (
        <div  className='d-flex flex-column'>
            
            
            { cartArrange.arrange.map((element,eleidx)=> 
                <div key={eleidx} className='d-flex flex-row p-4'>
                    { cartArrange.cart.slice(element,element+3).map((cartItem,index)=>
                            
                        <CartItem key={index} 
                                  cartItem={cartItem} 
                        />
                    )}
                
                </div>
           
            )}
            

        </div>
    )
}
