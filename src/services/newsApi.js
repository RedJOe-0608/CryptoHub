import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = 'https://bing-news-search1.p.rapidapi.com'

const newsApiHeaders = {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': process.env.X-RapidAPI-Key,
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
}

const createRequest = (url) => ({url, headers: newsApiHeaders})

export const newsApi = createApi({
    reducerPath: 'newsApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            query: ({newsCategory, count}) => createRequest(`/news/search/?q=${newsCategory}&safeSearch=Off&freshness=Day&textFormat=Raw&count=${count}`)
        })
    }) 
})

export const {useGetCryptoNewsQuery} = newsApi