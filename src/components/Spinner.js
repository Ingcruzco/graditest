import React, { useState } from 'react'
import '../styles/spinner.css';

function Spinner({loading}) {
  return (
    <>
        {
            loading 
            ?
            <div className="container"> 
                <div id="loading" className="loading">
                    Cargando&#8230;     
                </div>
            </div>
            : null
        }
    </>
  )
}

export default Spinner