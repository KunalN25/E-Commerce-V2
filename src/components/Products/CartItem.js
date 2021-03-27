import React,{useState, useEffect} from 'react'
import ProductViewData from './ProductViewData'
import {useCart} from '../Context/CartContext'
export default function CartItem({ cartItem }) {

    const [productCount,setProductCount]=useState(0)
    const {addProductToCart,removeProductFromCart} = useCart()

    useEffect(()=>{
        setProductCount(cartItem.count)
    },[])

    //implement edit functionality
    function decreaseCount(){
        if(productCount!==1) {
            addProductToCart(cartItem,-1)
            setProductCount(productCount-1)
            
        } else {
            removeProductFromCart(cartItem)
            window.location.reload()
            
        }
    }

    function increaseCount(){
        addProductToCart(cartItem)
        setProductCount(productCount+1)
    }

    function removeProduct(){
        removeProductFromCart(cartItem)
        window.location.reload()
    }


    return (
        <div className='card product-card'>
            {/* <ProductViewData product={cartItem}></ProductViewData> */}
            <img className="card-img-top" src={cartItem.imageURL} alt={cartItem.name}
                ></img>
            <div className='card-body'>
                <h5 className="card-title product-name">{cartItem.name} </h5>
                <div className='card-text'>Rs. {cartItem.price}</div>
                <button className="minus"
                        onClick={decreaseCount}>-</button>
                {productCount }
                <button className="plus"
                        onClick={increaseCount}>+</button>
                <div>
                    <button className="btn btn-danger" onClick={removeProduct}>
                        Remove
                    </button>
                </div>
                
            </div>
            
             
        </div>
    )
}
