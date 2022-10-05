import React from 'react'
import Center from './Center'
import Footer from './Footer'
import SideBar from './SideBar'

const Homepage = () => {
  return (
    <div className='flex flex-col'>
      <div className='flex flex-row'>
         <SideBar />
         <Center />

      </div>
         <Footer />
    </div>
  )
}

export default Homepage