import React, { useContext, useEffect, useState } from 'react'
import { ShoppingContext } from '../context/ShoppingContext';
import { normalizeCurrency } from '../helpers/currency'


export default function ProductDetails({data}) {


    const {shopping,setShopping}=useContext(ShoppingContext);
    const [colorSelected,setColorSelected]=useState(()=>{
        return  data?.options[0].values[0];
    });
    const [sizeSelected,setSizeSelected]=useState(()=>{
        try {
            const temp=data?.variants.filter(product=> product.option1==colorSelected);
            return temp[0].id;
        } catch (error) {
            console.log(error);
        }
        return 0;
    });
    const [productsSizes,setProductsSizes]=useState([]);
    const [productsSelected,setProductsSelected]=useState(()=>{
        try {
            const temp=data?.variants.filter(product=> product.option1==colorSelected);
            return temp[0];
        } catch (error) {
            console.log(error);
        }
        return 0;
    });

    const [counter, setCounter]=useState(1);
    const [openModal,setOpenModal]=useState(false);
   
    useEffect(()=>{
        try {
            const temp=data?.variants.filter(product=>product.option1==colorSelected)
            setSizeSelected(temp[0].id);
            setProductsSelected(temp[0]);
            setProductsSizes(temp);
        } catch (error) {
            console.log(error)
        }
    },[colorSelected]);

    const handleColorChange=(event)=>{
        const color=event.target.attributes.getNamedItem('color').value;
        setColorSelected(color);
    }
    const handleSizeChange=(product)=>{
        setSizeSelected(product.id);
        setProductsSelected(product)     
    }

    const calculateTotalPrice=()=>{
        return counter*productsSelected?.price;
    }

  return (
    <section>
        <span className='vendor'>by {data?.vendor}</span>
        <h2 className='title-product'>{data?.title}</h2>
        <div className='prices'>
            <span className='price'> {normalizeCurrency(data?.price)}</span>
            <span className='compare_at_price'> {normalizeCurrency(data?.compare_at_price)}</span>
        </div>
        <div className='color_container'>
            <span>Color: </span>
            <ul className='list-colors'>
                {
                    data?.options[0].values.map((color,index)=>(
                        <li className={color==colorSelected ? 'item-color active' : 'item-color'} key={index}>
                            <button className='color_options' color={color} onClick={handleColorChange}></button>                        
                        </li>
                    ))
                }
            </ul>
        </div>
        <div className='sizes-container'>
            <span className='title-size'>Size: </span>
            <ul className='list-size-container'>
                {
                    productsSizes.map(product=>(
                        <li className={product.id==sizeSelected ? 'item-size activate' : 'item-size'} key={product.id} onClick={(event)=>handleSizeChange(product)}>
                            {product.option2}
                        </li>
                    ))
                }        
            </ul>
        </div>
    </section>
  )
}
