import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { ShoppingContext } from '../context/ShoppingContext';
import '../styles/iconcart.css'

export default function Iconcart() {
    const navigate=useNavigate();
    const {shopping}=useContext(ShoppingContext);

  return (
    <div className='cart-icon-container' onClick={()=>navigate('/my-cart')}>
        {
            shopping.products.length>0
            ?<button className='number-products' onClick={()=>navigate('/my-cart')}>{shopping.products.length}</button>
            :null
        }
    </div>
  )
}
