import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='w-full h-[10rem] bg-[#001529] flex items-center justify-center flex-col'>
        <h3 className='text-white text-lg'>Copyright © 2022 CryptoHub Inc. </h3>
        <h4 className='text-white'>All Rights Reserved</h4>
            <div className='flex flex-row mt-2 items-center justify-center'>
                <Link className='mr-3 hover:transition ease-in-out duration-500 hover:text-blue-700  text-gray-500' to='/'>Home</Link>
                <Link className='mr-3 hover:transition ease-in-out duration-500 hover:text-blue-700 text-gray-500' to='/cryptocurrencies'>Cryptocurrencies</Link>
                <Link className='mr-3 hover:transition ease-in-out duration-500 hover:text-blue-700 text-gray-500' to='/news'>News</Link>
            </div>
    </div>
  )
}

export default Footer