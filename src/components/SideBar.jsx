import React from 'react'
import { Link, useParams } from 'react-router-dom'
import cryptocurrency from '../images/cryptocurrency.png'
import {AiOutlineHome, AiOutlineFund, AiOutlineBulb} from "react-icons/ai";
const SideBar = () => {
  const params = useParams()
  const pathname = window.location.pathname
  return (
    <div className='w-[17rem] bg-[#001529] min-h-screen'>
      <header className='pt-5  px-5 flex flex-row items-center'>
    <img src={cryptocurrency} className='w-12 h-12' />
      <h1 className='text-2xl font-bold ml-3 text-[#1890ff]'>CryptoHub</h1>
      </header>
      <div className=' text-gray-400 flex mx-2 flex-col mt-12'>
        <div
       
        className={`flex flex-row items-center  h-10 pl-2 mb-3 hover:cursor-pointer hover:transition ease-in-out duration-500 hover:text-blue-700 ${pathname === '/' ? 'bg-blue-500 text-white p-2 rounded-sm' : ''}`}>
          <AiOutlineHome className='text-white' />
          <Link to='/' className='ml-3 w-full'>Home</Link>
        </div>
        <div
         onClick={() => console.log(window.location.pathname)}
        className={`flex flex-row h-10 pl-2 mb-3 items-center  hover:cursor-pointer hover:transition ease-in-out duration-500 hover:text-blue-700 ${pathname === '/cryptocurrencies' ? 'bg-blue-500 text-white rounded-sm' : ''}`}>
          <AiOutlineFund className='text-white'/>
           <Link to='/cryptocurrencies' className={` ml-3 w-full`}>Cryptocurrencies</Link>
        </div>
        <div  className={`flex flex-row items-center h-10 pl-2 mb-3 hover:cursor-pointer hover:transition ease-in-out duration-500 hover:text-blue-700 ${pathname === '/news' ? 'bg-blue-500 text-white rounded-sm' : ''}`}>
          <AiOutlineBulb className='text-white'/>
      <Link to='/news' className='ml-3 w-full'>News</Link>
        </div>
      </div>
    </div>
  )
}

export default SideBar