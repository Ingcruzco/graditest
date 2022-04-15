import React from 'react'
import Iconcart from './Iconcart'
import '../styles/navbar.css'
import { useNavigate } from 'react-router-dom'

export default function Navigation() {
    
    const navigate=useNavigate();

  return (
    <header className='header'>
        <img className='image-logo' src='graditestlogo.png' alt='logo-graditest' style={{cursor:'pointer'}} onClick={()=>navigate('/')} />     
        <Iconcart/>
    </header>
  )
}
