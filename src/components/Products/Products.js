import React, {useState, useEffect} from 'react'
// import {useCart} from './../Context/CartContext'
import './product.css'
import { useCart } from './../Context/CartContext';
import ProductItem from './ProductItem';
import {db} from '../../config/firebase'

export default function Products() {
    
    // const cart= useCart()

    const [products]=useState([
        {
            id:1000,
            name:'mobile',
            price:300,
            imageURL:'https://www.online-tech-tips.com/wp-content/uploads/2019/12/electronic-gadgets.jpeg'
        },
        {
            id:1001,
            name:'laptop',
            price:500,
            imageURL:'https://www.online-tech-tips.com/wp-content/uploads/2019/12/electronic-gadgets.jpeg'

        },
        {
            id:1002,
            name:'computer',
            price:750,
            imageURL:'https://www.online-tech-tips.com/wp-content/uploads/2019/12/electronic-gadgets.jpeg'
        },
        {
            id:1003,
            name:'headphone',
            price:175,
            imageURL:'https://www.online-tech-tips.com/wp-content/uploads/2019/12/electronic-gadgets.jpeg'
        },
        {
            id:1004,
            name:'headphone',
            price:23,
            imageURL:'https://www.online-tech-tips.com/wp-content/uploads/2019/12/electronic-gadgets.jpeg'
        },
        {
            id:1005,
            name:'mouse',
            price:300,
            imageURL:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEo1obGlZQVj8kLLYnQxCN8RxIdpbYfI89Tw&usqp=CAU'
        },
        {
            id:1006,
            name:'keyboard',
            price:500,
            imageURL:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEo1obGlZQVj8kLLYnQxCN8RxIdpbYfI89Tw&usqp=CAU'

        },
        {
            id:1007,
            name:'printer',
            price:750,
            imageURL:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEo1obGlZQVj8kLLYnQxCN8RxIdpbYfI89Tw&usqp=CAU'
        },
        {
            id:1008,
            name:'fax',
            price:175,
            imageURL:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEo1obGlZQVj8kLLYnQxCN8RxIdpbYfI89Tw&usqp=CAU'
        },
        {
            id:1009,
            name:'speaker',
            price:23,
            imageURL:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEo1obGlZQVj8kLLYnQxCN8RxIdpbYfI89Tw&usqp=CAU'
        },
        
        ])
    //Arrange array contains the order in which products are arranged
    const [arrange, setArrange]=useState([])

    // function getCartElements() {
    //     let items=[]
    //     items=JSON.parse(localStorage.getItem("Cart"));
    //     console.log("Cart from Products is " +items)

    //     return items;   
    // }
    const [cart,setCart]=useState([])

    const {COLLECTION_NAME, setCartValue}=useCart()

    // const {cart}=useCart()
    

    useEffect(()=> {

        // Arrange products
        const arrrange=[]
        for(let i=0;i<products.length;i+=3){
            arrrange.push(i)
        }
        setArrange(arrrange)

        const items=[]
        // Get the data
        // db.collection(COLLECTION_NAME).get().then((query)=>{
        //     // const items=JSON.parse(localStorage.getItem('Cart'))
        //     // setCart(items)
        //     // Set the arrange array
        //     query.forEach((doc)=>{//Loop through each document
        //         // console.log('Doc data ', doc.data().product)
        //         items.push(doc.data().product)
        //     })
        //     setCart(items)
            
           
                 
        // })
        
       

    },[products.length])


    // console.log('Product Rendered')
    
    return (
        <div className='product-container d-flex flex-column'>
                
            
            { arrange.map((element,eleidx)=> 
            
                <div key={eleidx} className='d-flex flex-row p-4'>
                    { products.slice(element,element+3).map((product,index)=>
                            
                        // <div className='card'>
                            <ProductItem key={product.id} 
                                     product={product}
                                     index={element+index} 
                                     />
                        // </div>
                    )}
                
                </div>
           
            )}
            
    
    
        </div>
        )
}
