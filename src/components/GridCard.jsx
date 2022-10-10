import millify from 'millify'
import React from 'react'

const GridCard = ( {icon, text, value}) => {
  return (
          <div className='flex flex-row p-4 border-b-[1px] border-gray-300 justify-between items-center mt-4'>
                  <section className='flex flex-row items-center'>
                     {icon}
                  
                   <p className='text-gray-800 text-lg ml-3'>{text} </p>
                  </section>
                  <p className='font-bold text-gray-800 text-lg'>
                    {/* {text !== 'Rank' && text !== 'Number of Markets' && text!== 'Number Of Exchanges' && `$ ${millify(value)}`} */}
                    {text !== 'Rank' && text !== 'Number of Markets' && text!== 'Number Of Exchanges' ? `$ ${millify(value)}` : millify(value) }
                    </p>
            </div> 
  )
}

export default GridCard