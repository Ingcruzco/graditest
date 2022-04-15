import React, { useContext } from 'react'
import { ShoppingContext } from '../context/ShoppingContext';
import { normalizeCurrency } from '../helpers/currency';
import '../styles/cart.css'


export default function Cart() {

    const {shopping,setShopping}=useContext(ShoppingContext);


  return (
        <ul className='cart-container'>
            {
                shopping.products.map((product,index)=>(
                    <li className='product-item' key={index}>
                        <img className='image-item' src={product.image}/>
                        <span>{product.name}</span>
                        <span>Items: {product.quantity}</span>
                        <span>Total price: $ {normalizeCurrency(product.totalPrice)}</span>
                    </li>
                ))
            }
        </ul>
  )
}
