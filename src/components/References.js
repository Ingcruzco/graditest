import React, { useContext, useEffect, useRef, useState } from 'react';
import { ShoppingContext } from '../context/ShoppingContext';
import { normalizeCurrency } from '../helpers/currency';
import '../styles/references.css';
import ModalProductAdded from './ModalProductAdded';

function FormProduct({data}) {

    const {shopping,setShopping}=useContext(ShoppingContext);
    const [colorSelected,setColorSelected]=useState(()=>{
        return  data?.options[0].values[0];
    });
    const [sizeSelected,setSizeSelected]=useState(()=>{
        try {
            const temp=data?.variants.filter(product=> product.option1==colorSelected);
            return temp[0].id;
        } catch (error) {
            return;
        }
    });
    const [productsSizes,setProductsSizes]=useState([]);
    const [productsSelected,setProductsSelected]=useState(()=>{
        try {
            const temp=data?.variants.filter(product=> product.option1==colorSelected);
            return temp[0];
        } catch (error) {
            return;
        }
    })
    const [counter, setCounter]=useState(1);
    const [openModal,setOpenModal]=useState(false);
   
    //this effect is affected as soon as color is selected for the customer, for this reason
    //is necessary change the size array, because is possible that size changed with the color
    useEffect(()=>{
        try {
            //temporal array with the sizes for the color selected for the user
            const temp=data?.variants.filter(product=>product.option1==colorSelected)
            setSizeSelected(temp[0].id);
            //when the user change the color, the default size selected it will be the first
            setProductsSelected(temp[0]);
            setProductsSizes(temp);
        } catch (error) {
            return;
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

    //this function handle the event add product to cart, add the properties images, total prices and quantity
    //to show them in the modal, and it is necessary to review on my-cart end point
    const handleAddProduct=()=>{
        const temp=[...shopping.products];
        temp.push({...productsSelected,image:data?.images[0],totalPrice:calculateTotalPrice(),quantity:counter})
        setShopping({products:temp});
        setOpenModal(true);
    }

  return (
    <div className='container_reference'>

        <section style={{width:'100%'}}>
            <span className='vendor'>by {data?.vendor}</span>
            <h2 className='title-product'>{data?.title}</h2>
            <div className='prices'>
                <span className='price'>$ {normalizeCurrency(data?.price)}</span>
                {
                    //normalize currency is necessary to correct amount returned for the API
                }
                <span className='compare_at_price'>$ {normalizeCurrency(data?.compare_at_price)}</span>
            </div>
            <div className='color_container'>
                <span>Color: </span>
                <ul className='list-colors'>
                    {
                        //here we list all colors returned for the API, default the color is the first value received from the array 
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

        <section style={{width:'100%'}}>
            <div className='total-price'>
                <div className='add-quantity'>
                    <span className='signal' onClick={()=>setCounter(prevstate=>(prevstate-1<1 ? 1 : prevstate-1))} >-</span>
                    <span className='quantity'>{counter}</span>
                    <span className='signal' onClick={()=>setCounter(counter+1)}>+</span>
                </div>
                <div className=''>
                    <span style={{color:'#C4C4C4',fontWeight:'bold'}}>Total price: </span>
                    <span style={{fontWeight:'bold'}}>$ {normalizeCurrency(calculateTotalPrice())} </span>
                </div>
            </div>
            <div>
                <div className='btns-container'>
                    <button className='btn-favourite' onClick={()=>alert('Working on it, comming soon!')}>Add to favourite</button>
                    <button className='btn-add-cart' onClick={handleAddProduct}>Add to cart</button>
                </div>
                <div className='product-description' dangerouslySetInnerHTML={{ __html:data?.description}} style={{textAlign:'justify'}}/>
            </div>
        </section>

        {
            openModal
            ?<ModalProductAdded open={openModal} setOpen={setOpenModal} product={{...productsSelected,image:data?.images[0],totalPrice:calculateTotalPrice(),quantity:counter}}/>
            :null
        }
    </div>
  )
}

export default FormProduct;