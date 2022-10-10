import React from 'react'
import Center from './Center'
import Footer from './Footer'
import SideBar from './SideBar'
import { useGetCryptosQuery } from '../services/cryptoApi';
import { useGetCryptoNewsQuery } from '../services/newsApi';

const Homepage = () => {
  const {data: cryptos, isFetching: isFetchingCryptos} = useGetCryptosQuery();
  const {data: cryptoNews, isFetching: isFetchingCryptoNews} = useGetCryptoNewsQuery({newsCategory: 'cryptocurrency', count: 7});
  console.log(cryptoNews);
  // console.log(data);
  return (
    <div className='flex flex-col'>
      <div className='flex flex-row'>
         <SideBar />
         <Center cryptoData={cryptos?.data} cryptoNews={cryptoNews}/>
      </div>
         <Footer />
    </div>
  )
}

export default Homepage