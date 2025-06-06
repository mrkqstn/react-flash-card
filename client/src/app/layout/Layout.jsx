import React from 'react'
import Header from '../../widgets/Header/Header'
import { Outlet } from 'react-router'

export default function Layout() {
  return (
    <div style= {{width: '100%'}}>
      <Header />
      <Outlet />
    </div>
  )
}
