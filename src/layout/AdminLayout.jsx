import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from '../components/admin/SideBar'

export default function AdminLayout() {
  return (
    <div className='flex'>
      <div className='min-h-screen w-1/5'>

        <SideBar/>
      </div>
         <div className='min-h-screen w-4/5'>
            <Outlet/>
         </div>
    </div>
  )
}
