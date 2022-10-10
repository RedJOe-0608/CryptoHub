import {  createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = 'https://coinranking1.p.rapidapi.com'

const coinDetailsApiHeaders = {
     'X-RapidAPI-Key': '4248964d04mshd2e07c07e4e76dfp1a0fd7jsn2625366708f0',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}

const createRequest = (url) => ({url, headers: coinDetailsApiHeaders})

export const coinDetailsApi = createApi({
    reducerPath: "coinDetails",
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        getCoinDetails: builder.query({
            query: ({uuid}) => createRequest(`/coin/${uuid}`)
        })
    })
    
})

export const {useGetCoinDetailsQuery} = coinDetailsApi