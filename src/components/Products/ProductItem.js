import React, {useEffect,useState} from 'react'
import './product.css'
import {useCart} from './../Context/CartContext';
import ProductViewData from './ProductViewData'


export default function ProductItem({  product,index }) {

    const {addProductToCart,getProductsFromCart}=useCart()
    const [added,setAdded]=useState(false)
    useEffect(() => {
     
        
        const productElem=document.getElementById(product.id)

        // const items=JSON.parse(localStorage.getItem('Cart'));
        const items=getProductsFromCart()
        if(items!=null){
            if(items.find(prd => prd.id==product.id)){
                // productElem.disabled=true
                // productElem.classList.remove('btn-primary')
                // productElem.classList.add('btn-secondary')
                setAdded(true)
    
    
            }
        }
        
    })

    
  
    function addProduct(product) {
            product.count=1
            // console.log(product)
            addProductToCart(product)

            //Edit the button in any way if clicked
            const productElem=document.getElementById(product.id)
            // productElem.classList.remove('btn-primary')
            // productElem.classList.add('btn-secondary')
            setAdded(true)

            
            
          
    }
 
    // console.log(disable)
    return (
        <div className="card product-card">
            {/* <ProductViewData product={product}></ProductViewData> */}
            <img className="card-img-top" src={product.imageURL} alt={product.name}
                ></img>
            <div className='card-body'>
                <h5 className="card-title product-name mb-1">{product.name} </h5>
                <div className='card-text '>Rs. {product.price}</div>
             
        
                    {
                        !added ? 
                        <button id={product.id}
                            className={`btn btn-primary add-btn  `}
                            onClick={()=> addProduct(product)}
                            >
                            Add+ 
                        </button> 
                        : 
                        <button id={product.id}
                        className={`btn btn-success  add-btn `}
                        onClick={()=> addProduct(product)}
                        >
                            Added to cart 
                        </button>
                    }
               
             
            </div>
            
        </div>
    )
}
