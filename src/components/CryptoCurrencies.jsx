import React, {useState, useEffect} from 'react'
import Footer from './Footer'
import millify from 'millify'
import SideBar from './SideBar'
import { useGetCryptosQuery } from '../services/cryptoApi'
import { Link } from 'react-router-dom'
const CryptoCurrencies = () => {
  const {data: cryptoData, isFetching} = useGetCryptosQuery()
  const [cryptos, setCryptos] = useState(cryptoData?.data?.coins)
  const [searchCrypto, setSearchCrypto] = useState('')
  // console.log(cryptos);

  useEffect(() => {
   let filteredResults =  cryptoData?.data?.coins.filter((coin) => coin.name.toLowerCase().includes(searchCrypto.toLowerCase()))
   setCryptos(filteredResults)
  },[searchCrypto])

  
  return (
    <div className='flex flex-col'>
      <div className='flex flex-row'>
      <SideBar />
        <div className='flex flex-col'>
        <form className='flex mt-12 justify-center' >
          <input type="text" className='w-1/3 p-2 outline-blue-500'
          onChange={(e) => setSearchCrypto(e.target.value)}
          placeholder='Search Cryptocurrencies...' />
        </form>

          <div className='grid grid-cols-4 gap-[3rem] p-4 mt-16 mb-5'>
                {cryptos?.map((coin) => {
                    return (
                <Link key={coin.rank} to={`/crypto/${coin?.uuid}`} className='flex flex-col w-[14rem] p-5 min-h-[10rem] bg-white hover:drop-shadow-[0_0px_7px_rgba(0,0,0,0.4)] hover:transition ease-in duration-500 transition cursor-pointer'>
                    <header className='flex flex-row justify-between'>
                        <div className='flex flex-row items-center'>
                        <p>{coin.rank}</p>
                            <h1 className='ml-2'>{coin.name}</h1>

                        </div>
                    <img src={coin.iconUrl} className='w-10 h-10 object-cover' />

                    </header>
                        <div className='flex flex-col mt-7'>
                            <p className='text-md mb-3'>Price: {millify(coin.price)}</p>
                            <p className='text-md mb-3'>Market Cap: {millify(coin.marketCap)}</p>
                            <p className='text-md mb-3'>Daily Change: {millify(coin.change)}</p>
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

export default CryptoCurrencies