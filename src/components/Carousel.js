import React, { useState } from 'react'
import '../styles/carousel.css';

function Carousel({images=[]}) {
  const [position,setPosition]=useState(0);

  const handleClick=(event)=>{
    setPosition(event.target.attributes.getNamedItem('data-position').value);
  }


  return (
    <div className='container_corousel'>
      <img className='imageProduct' src={images[position]} alt='Imagen de producto' />
      <div className='dot_container'>
        {
          images?.map( (img,index)=>(
            <span className='dot' key={index} onClick={handleClick} data-position={index}>
              {index==position ? "● " : "o "}
            </span>
          ))
        }          
      </div>
    </div>
  )
}

export default Carousel