import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingContext } from '../context/ShoppingContext';
import { normalizeCurrency } from '../helpers/currency';
import '../styles/modal.css';


function ModalProductAdded({setOpen,product}) {

    const navigate=useNavigate();


  return (
    <div className='modal-container'>
        <form className='form-modal'>
            <h1 className='title-modal'>Product(s) added(s) to cart</h1>
            <h3 className='name-product'>{product.name}</h3>
            <img className='image-modal' src={product.image} alt={product.name} />
            <span className='quantity-products'>items: {product.quantity}</span>
            <span className='amount-products'>Total price: <strong style={{color:'black'}}>$ {normalizeCurrency(product.totalPrice)}</strong> </span>
            <button color='black' className='button-modal' onClick={()=>setOpen(false)}>Continue shopping</button>
            <button color='gray' className='button-modal' onClick={()=>navigate('/my-cart')}>Go to cart</button>
        </form>
    </div>
  )
}

export default ModalProductAdded;