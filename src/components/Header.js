import React from 'react'
// import { Button } from 'react-bootstrap';
import './header.css'
import {Link} from 'react-router-dom'
import routes from "./Routes"


export default function Header() {
    return (
        <div class='header-cmp'>
            <h1>Electron</h1>   
             <nav >
            

                <ul className='nav-links'>
                    <Link to={routes.default}>
                        <li><a class='nav-link'> Home</a> </li>
                    
                    </Link>
                    
                    
                    {/* <Link to={routes.about_us}>
                    <li><button>About Us</button> </li>
                    
                    </Link> */}
                    
                
                </ul>
                {/* <div className="ml-auto mr-5">
                    <Button variant="primary">Add to cart</Button>

                </div> */}
                
           
            </nav>
        </div>
       
    )
}
