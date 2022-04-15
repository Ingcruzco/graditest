import React from 'react'
import Iconcart from './Iconcart'
import '../styles/navbar.css'
import { useNavigate } from 'react-router-dom'

export default function Navigation() {
    
    const navigate=useNavigate();

  return (
    <header className='header'>
        <h1 style={{cursor:'pointer'}} onClick={()=>navigate('/')}>GradiTEST</h1>
        <Iconcart/>
    </header>
  )
}
