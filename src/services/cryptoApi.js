//Redux toolkit simplifies the process of using APIs. Make sure to understand this.

import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const baseUrl = 'https://coinranking1.p.rapidapi.com'

const cryptoApiHeaders = {
    'X-RapidAPI-Key': process.env.X-RapidAPI-Key,
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}

const createRequest = (url) => ({url, headers: cryptoApiHeaders})

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: () => createRequest('/coins')
        }),
        getCryptoHistory: builder.query({
            query: ({uuid, timePeriod}) => createRequest(`/coin/${uuid}/history?timePeriod=${timePeriod}`)
        })
    }) 
})

export const {useGetCryptosQuery, useGetCryptoHistoryQuery} = cryptoApi
