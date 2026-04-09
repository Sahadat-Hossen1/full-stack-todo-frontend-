import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/share/header/Navbar'
import Footer from './../components/share/footer/Footer';

export default function Main() {
  return (
    <div>
        <header>
            <Navbar/>
        </header>
        <main className='min-h-screen  '>
            <Outlet/>
        </main>
        <footer>
            <Footer/>
        </footer>
    </div>
  )
}
