import React, { useState } from 'react';
import '../styles/references.css';

function References({data}) {

    const [colorSelected,setColorSelected]=useState(0);

    const handleColorChange=(event)=>{
        setColorSelected(event.target.attributes.getNamedItem('data-position').value);
    }

  return (
    <div className='container_reference'>
        <span className='vendor'>by {data?.vendor}</span>
        <h2 className='title-product'>{data?.title}</h2>
        <div className='prices'>
            <span className='price'> {data?.price}</span>
            <span className='compare_at_price'> {data?.compare_at_price}</span>
        </div>
        <div className='color_container'>
            <span>Color: </span>
            <ul className='list-colors'>
                {
                    data?.options[0].values.map((color,index)=>(
                        <li className={index==colorSelected ? 'item-color active' : 'item-color'} key={index}>
                            <button className='color_options' color={color.toLowerCase()} onClick={handleColorChange} data-position={index}></button>                        
                        </li>
                    ))
                }
            </ul>
        </div>
    </div>
  )
}

export default References;