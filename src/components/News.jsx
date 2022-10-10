import React, { useEffect, useState } from 'react'
import Footer from './Footer'
import SideBar from './SideBar'
import {RemoveScrollBar} from 'react-remove-scroll-bar';
import { useGetCryptoNewsQuery } from '../services/newsApi'
import { useGetCryptosQuery } from '../services/cryptoApi'
import moment from 'moment'
import { Link } from 'react-router-dom'
import Loader from './Loader'
import './News.css'
const News = () => {

  //First, the news category is set to cryptocurrency. Then, we are changing it dynamically.
  const [category, setNewsCategory] = useState('cryptocurrency')
  const [searchCoin, setSearchCoin] = useState('')
  const {data: cryptoNews, isFetching} = useGetCryptoNewsQuery({newsCategory: category , count: 12})
  // console.log(cryptoNews);
  const {data} = useGetCryptosQuery()
  //cryptos contains all the coins. You need this information for the search menu.
  const [cryptos, setCryptos] = useState(data?.data?.coins)

  useEffect(() => {
    let filteredItems = data?.data?.coins?.filter((crypto) => crypto?.name.toLowerCase().includes(searchCoin.toLowerCase()))
    setCryptos(filteredItems)
  },[searchCoin])
  console.log(searchCoin);

  const handleClick = (name) => {
    setNewsCategory(name)
    setSearchCoin('')

  };

  if(isFetching){
    return <Loader />
  }
  return (
    <div className='flex flex-col'>
      <div className='flex flex-row'>
      <SideBar />
        <div className='flex p-2 ml-5 flex-col'>
          <input type="text" className='mt-8 p-2 outline-blue-400  w-1/3'
          value={searchCoin}
          onChange={(e) => setSearchCoin(e.target.value)}  
          placeholder='Search Crypto News...' />

          {searchCoin !== '' && <div className='searchBarOptions w-[14rem] py-2 h-[12rem] drop-shadow-[0_5px_15px_rgba(0,0,0,0.3)] mt-2 overflow-y-auto overflow-hidden bg-white' >
            {cryptos?.map((crypto) => (
                <p
                onClick={() => handleClick(crypto?.name)}
                className='text-sm p-2 cursor-pointer hover:bg-gray-300'>{crypto?.name}</p>
            ))}

            </div>}
               <div className='grid grid-cols-3 mb-10 mt-12 gap-[2rem]'>
                {cryptoNews?.value.map((news) => {
                    return (
                        <Link to={news?.url} className='flex flex-col w-[20rem] p-5 min-h-[10rem] bg-white rounded-sm hover:drop-shadow-[0_0px_7px_rgba(0,0,0,0.4)] hover:transition ease-in duration-500 cursor-pointer'>
                            <header className='flex flex-row justify-between min-h-20'>
                            <h2 className='text-gray-800 text-xl font-semibold'>{news?.name}</h2>
                                <img className='w-[10rem] object-cover' src={news?.image?.thumbnail?.contentUrl} />
                            </header>
                            <p className='text-gray-600 mt-8'>{news?.description.slice(0,100)}...</p>
                            <div className='flex flex-row mt-5 items-center justify-between'>
                                <div className='flex flex-row items-center'>
                                    <img src={news?.provider[0]?.image?.thumbnail?.contentUrl} className='w-8 rounded-full h-8' />
                                    <p className='ml-2 text-xs'>{news?.provider[0]?.name}</p>
                                </div>
                                <p className='text-sm'>{moment(news.datePublished).startOf('ss').fromNow()}</p>
                            </div>
                        </Link>
                    )
                })}

             </div>
        </div>

      </div>
      <Footer />  
    </div>
  )
}

export default News