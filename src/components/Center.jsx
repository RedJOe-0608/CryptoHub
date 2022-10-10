import React from 'react'
import millify from 'millify'
import { Link } from 'react-router-dom'
import moment from 'moment/moment'
const Center = ({cryptoData, cryptoNews}) => {
  return (
    <div className='m-4'>
        <h1 className='text-3xl font-semibold text-gray-800'>Global Crypto Stats</h1>
        <div className='grid grid-cols-2 mt-8 mb-5 gap-x-[27rem]'>
            <div >
                <div className='flex flex-col mb-5'>

                <h2 className='text-gray-400 text-md'>Total Crptocurrencies</h2>
                    <p className='text-2xl mt-3 text-gray-800'>{cryptoData?.stats?.total}</p>
                </div>
                <div className='flex flex-col mb-4'>

                <h2 className='text-gray-400 text-md'>Total Market Cap: </h2>
                    <p className='text-2xl mt-3 text-gray-800'>${millify(cryptoData?.stats?.totalMarketCap)}</p>
                </div>
                <div className='flex flex-col mb-4'>

                <h2 className='text-gray-400 text-md'>Total Crptocurrencies</h2>
                    <p className='text-2xl text-gray-800 mt-3'>{cryptoData?.stats?.totalCoins}</p>
                </div>
            </div>
            <div>
                <div className='flex flex-col mb-5'>

                <h2 className='text-gray-400 text-md'>Total Exchanges</h2>
                    <p className='text-2xl mt-3 text-gray-800'>{cryptoData?.stats?.totalExchanges}</p>
                </div>
                <div className='flex flex-col mb-4'>

                <h2 className='text-gray-400 text-md'>Total 24h Volume: </h2>
                    <p className='text-2xl mt-3 text-gray-800'>${millify(cryptoData?.stats?.total24hVolume)}</p>
                </div>
                <div className='flex flex-col mb-4'>

                <h2 className='text-gray-400 text-md'>Total Markets</h2>
                    <p className='text-2xl text-gray-800 mt-3'>{millify(cryptoData?.stats?.totalMarkets)}</p>
                </div>
            </div>
        </div>
            <div className='flex flex-row justify-between mb-7 items-center'>
        <h1 className='text-3xl font-semibold text-gray-800'>Top 10 Cryptos In The World</h1>
        <button className='text-2xl text-blue-500 hover:transition ease-in-out duration-500 hover:text-blue-900'> <Link to='/cryptocurrencies'>See More</Link> </button>

            </div>
            <div className='grid grid-cols-4 gap-[3rem] mb-5'>
                {cryptoData?.coins?.slice(0,10).map((coin) => {
                    return (
                <Link key={coin?.rank} to={`/crypto/${coin?.uuid}`} className='flex flex-col w-[14rem] p-5 min-h-[10rem] bg-white hover:drop-shadow-[0_0px_7px_rgba(0,0,0,0.4)] hover:transition ease-in duration-500 cursor-pointer'>
                    <header className='flex flex-row justify-between'>
                        <div className='flex flex-row items-center'>
                        <p>{coin.rank}</p>
                            <h1 className='ml-2'>{coin?.name}</h1>

                        </div>
                    <img src={coin.iconUrl} className='w-10 h-10 object-cover' />

                    </header>
                        <div className='flex flex-col mt-7'>
                            <p className='text-md mb-3'>Price: {millify(coin?.price)}</p>
                            <p className='text-md mb-3'>Market Cap: {millify(coin?.marketCap)}</p>
                            <p className='text-md mb-3'>Daily Change: {millify(coin?.change)}</p>
                        </div>
                    
                </Link>

                    )
                })}
            </div>

            

            <div className='flex flex-row justify-between mb-7 items-center'>
                <h1 className='text-3xl font-semibold text-gray-800'>Latest Crypto News</h1>
                <button className='text-2xl text-blue-500 hover:transition ease-in-out duration-500 hover:text-blue-900'> <Link to='/news'>See More</Link> </button>

            </div>
             <div className='grid grid-cols-3 mb-6 gap-[2rem]'>
                {cryptoNews?.value.map((news) => {
                    return (
                        <Link className='flex flex-col w-[20rem] p-5 min-h-[10rem] bg-white rounded-sm hover:drop-shadow-[0_0px_7px_rgba(0,0,0,0.4)] hover:transition ease-in duration-500 cursor-pointer'>
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
  )
}

export default Center