import React, {useEffect,useState} from 'react'
import {useCart} from './Context/CartContext'
// import ProductItem from './Products/ProductItem';
import CartItem from './Products/CartItem';
import {db} from '.././config/firebase'
import './Products/product.css'
import {Link} from 'react-router-dom'
import routes from "./Routes"

export default function Cart() {

    const [cartArrange, setCart]=useState({
        cart:[],
        arrange:[],
    })
    //To indicate whther the cart is empty or not
    const [cart_empty, setCart_empty] = useState(false)
    const {cart, getProductsFromCart,emptyCartProducts}=useCart()
    // const 


     function getCartProducts() {
        let items=[]
  
            //  db.collection(COLLECTION_NAME).get().then((query)=>{
            //     query.forEach((doc)=>{//Loop through each document
            //         // console.log('Doc data ', doc.data().product)
            //         items.push(doc.data().product)
            //     })
            // items=JSON.parse(localStorage.getItem("Cart"))
            items=getProductsFromCart()
            if(!items) items=[]

                if(items.length===0) {
                    setCart_empty(true);
                } else {
                    const arrrange=[]
                    for(let i=0;i<items.length;i+=3) {
                        arrrange.push(i)
                    }
                    setCart({
                        cart: items,
                        arrange: arrrange
                    })
                    // Cart to be shared
                    // setCartValue(items)
                    // localStorage.setItem('Cart',JSON.stringify(items))
                    // console.log('Cart was loaded from inside then()')
                }
                
                
            // })  
            //  console.log('Cart from Cart ',cart)

       
        
    }

    function emptyCart() {
        emptyCartProducts()
        window.location.reload()

    }
    function checkout(){

    }
    useEffect(()=>{
        console.log('useffect called')
         getCartProducts()
    },[])
  
    function displayEmptyMessage() {
        
        if(cart_empty) {
            return <div className='card product-card empty-msg'><h3>The cart is empty</h3></div>
        }
        
    }
    
    return (
        <div  className='product-container d-flex flex-column'>
            {
                !cart_empty &&
                <div>
                    <button className='btn btn-secondary empty-btn'
                            onClick={emptyCart}>
                        Empty Cart
                    </button>
                    <Link to={routes.checkout}>
                        <button className='btn btn-success checkout-btn'
                                onClick={checkout}>
                            Checkout
                        </button>
                    </Link>
                    
                </div>
            
            }
            { cartArrange.arrange.map((element,eleidx)=> 
                <div key={eleidx} className='d-flex flex-row p-4'>
                    { cartArrange.cart.slice(element,element+3).map((cartItem,index)=>
                            
                        <CartItem key={index} 
                                  cartItem={cartItem} 
                        />
                    )}
                
                </div>
           
            )}
            {/* To display empty message if cart is empty  */}
            {displayEmptyMessage()}
            

        </div>
    )
}
