import React, { useState } from 'react'
import '../styles/gridproducts.css'

export default function Gridproducts({images}) {
    
    const [imageSelected, setImageSelected]=useState(()=>{
        try {
           return images[0];
        } catch (error) {
            return;
        }
    });

    const handleChangeImage=(event)=>{
        const imgSelectded=event.target.attributes.getNamedItem('src').value;
        setImageSelected(imgSelectded);
    }

  return (
    <div className='grid-images'>
        <img className='image-selected' key={imageSelected} src={imageSelected} alt={`Product ${imageSelected}`}/>
        {
            images?.filter(image=> image!=imageSelected).map((image,index)=>(
                <img className='images-card' key={image} src={image} alt={image} onClick={handleChangeImage}/>
            ))
        }        
    </div>
  )
}
