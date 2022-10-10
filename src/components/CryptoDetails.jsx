import React, { useState } from 'react'
import Footer from './Footer'
import SideBar from './SideBar'
import { useGetCoinDetailsQuery } from '../services/coinDetailsApi'
import Loader from './Loader'
import {AiOutlineFund, AiOutlineTrophy,AiOutlineThunderbolt, AiOutlineNumber, AiOutlineExclamationCircle,AiOutlineMoneyCollect, AiOutlineDollarCircle } from "react-icons/ai";
import millify from 'millify'
import GridCard from './GridCard'
import HTMLReactParser from 'html-react-parser'
import '../CryptoDetails.css'
import LineChart from './LineChart'
import { useGetCryptoHistoryQuery } from '../services/cryptoApi'


const CryptoDetails = () => {
  const uuid = window.location.pathname.replace('/crypto/', '')
  const [timePeriod, setTimePeriod] = useState('24h')
  const {data, isFetching} = useGetCoinDetailsQuery({uuid: uuid})
  const {data: cryptoHistory} = useGetCryptoHistoryQuery({uuid, timePeriod })
  console.log(cryptoHistory);
  const coinDetails = data?.data?.coin
  // console.log(coinDetails);
  if(isFetching){
    return <Loader />
  }

  const getSelectedValue = () => {
    let option = document.getElementById('coins').value
      setTimePeriod(option)
  }
  //To capilize the word
  const capitalizeFirstLetter = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1)
  }
  const time = ['3h', '24h' ,'7d' ,'30d' ,'3m' ,'1y' ,'3y' ,'5y']
  return (
    <div className='flex flex-col'>
      <div className='flex flex-row'>
      <SideBar />
        <div className='w-[80%] px-[3rem] flex flex-col' >
          <header className='mt-[4rem] pb-8 border-b-[1px] border-gray-300 flex flex-col items-center justify-center'>
              <h1 className='text-4xl font-bold  text-[#0071bd]'>{coinDetails?.name} ({coinDetails?.symbol}) Price</h1>
              <p className='text-md text-gray-500 mt-5'>{coinDetails?.name} live price in US Dollar (USD). View value statistics, market cap and supply.</p>
          </header>

          <select
          id="coins"
          onChange={() => getSelectedValue()}
          className='w-1/3 mt-5 p-1'>
            {time.map((value) => (
              <option
              // value={value}
              key={value}
              >
               {value}
              </option>
            ))}
          </select>

          <LineChart cryptoHistory={cryptoHistory} coinName={coinDetails?.name} currentPrice={millify(coinDetails.price)} />

          <div className='grid grid-cols-2 mt-[5rem] gap-[8rem]'>
            <div className='flex flex-col'>
              <h3 className='text-2xl font-bold  text-[#0071bd]'>{coinDetails?.name} Value Statistics</h3>
              <p className='text-md text-gray-500 mt-5'>An overview showing the statistics of {coinDetails?.name}, such as the price in USD, Market Cap, and trading volume.</p>
              <GridCard
              icon={<AiOutlineDollarCircle className='w-5 h-5' />}
              text='Price in USD'
              value={coinDetails?.price}
              />
              <GridCard
              icon={<AiOutlineNumber className='w-5 h-5' />}
              text='Rank'
              value={coinDetails?.rank}
              />
              <GridCard
              icon={<AiOutlineThunderbolt className='w-5 h-5' />}
              text='Market Cap'
              value={`${coinDetails?.marketCap}`}
              />
              <GridCard
              icon={<AiOutlineTrophy className='w-5 h-5' />}
              text='All-time-high(daily avg.)'
              value={coinDetails?.allTimeHigh?.price}
              />
               
                  
            </div>
            <div className='flex flex-col'>
               <h3 className='text-2xl font-bold  text-[#0071bd]'>Other Stats Info</h3>
               <p className='text-md text-gray-500 mt-5'>Some basic statistics of {coinDetails?.name}, such as number of markets, number of exchages, total supply, etc.</p>
                 <GridCard
              icon={<AiOutlineFund className='w-5 h-5' />}
              text='Number of Markets'
              value={coinDetails?.numberOfMarkets}
              />
                 <GridCard
              icon={<AiOutlineMoneyCollect className='w-5 h-5' />}
              text='Number Of Exchanges'
              value={coinDetails?.numberOfExchanges}
              />
                 <GridCard
              icon={<AiOutlineExclamationCircle className='w-5 h-5' />}
              text='Total Supply'
              value={coinDetails?.supply?.total}
              />
                 <GridCard
              icon={<AiOutlineExclamationCircle className='w-5 h-5' />}
              text='Circulating Supply'
              value={coinDetails?.supply?.circulating}
              />
            </div>
          </div>
        <div className='my-[5rem] grid grid-cols-2 gap-[3rem]'>
          <div>

          <h2 className='text-2xl font-bold text-[#0071bd]'>What is {coinDetails?.name}?</h2>
       <p className='my-3 text-gray-700'>
                      {HTMLReactParser(coinDetails?.description)}
                    </p>
          </div>
          <div>
             <h2 className='text-2xl font-bold text-[#0071bd]'>{coinDetails?.name} Links</h2>
             {coinDetails?.links.map((link) =>{
              return (
              <div className='flex flex-row p-4 border-b-[1px] border-gray-300 justify-between items-center mt-4'>
                  <section className='flex flex-row items-center'>
                    <p className='text-gray-800 text-lg ml-3'>{capitalizeFirstLetter(link?.type) } </p>
                  </section>
                  <a href={link?.url} target='_blank' className='font-bold text-[#0071bd] text-lg'>
                   {link?.name}
                    </a>
            </div> 
             )})}
           
          </div>
        </div>
          
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default CryptoDetails