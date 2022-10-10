import React from 'react'
import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = ({cryptoHistory, coinName, currentPrice}) => {
    const coinPrice = []
    const coinTimestamp = []

    for (let i =0; i< cryptoHistory?.data?.history.length; i++) {
        coinPrice.push(cryptoHistory?.data?.history[i].price)
        coinTimestamp.push( new Date(cryptoHistory?.data?.history[i].timestamp*1000).toLocaleDateString())
        // console.log(coinTimestamp);
    }

      const data = {
    labels: coinTimestamp,
    datasets: [
      {
        label: 'Price in USD',
        data: coinPrice,
        fill: false,
        backgroundColor: '#0071bd',
        borderColor: '#0071bd',
      },
    ],
  };

const options = { scales: { y: { ticks: { beginAtZero: true, }, }, }, };
        
    
  return (
    <div>
        <div className='flex mt-5 flex-row justify-between items-center'>
            <h1 className='text-[#0071bd] font-bold text-3xl'>{coinName} Price Chart</h1>
                <div className='flex flex-row text-lg '>
                    <p className='font-bold text-gray-800 mr-3'>Change: {cryptoHistory?.data?.change}%</p>
                    <p className=' text-gray-800 font-bold'>Current {coinName} Price: {currentPrice} </p>
                </div>
        </div>
        <Line data={data} options={options} />
    </div>
  )
}

export default LineChart