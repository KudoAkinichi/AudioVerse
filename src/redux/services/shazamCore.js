import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// const options = {
//   method: 'GET',
//   headers: {
//     'X-RapidAPI-Key': '',
//     'X-RapidAPI-Host': 'shazam.p.rapidapi.com',
//   },
// };

// fetch('https://shazam.p.rapidapi.com/charts/track', options)
//   .then((response) => response.json())
//   .then((response) => console.log(response))
//   .catch((err) => console.error(err));

export const shazamCoreApi = createApi({
  reducerPath: 'shazamCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam.p.rapidapi.com',
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', '');

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({ query: () => '/charts/track' }),
    getSongDetails: builder.query({ query: ({ songid }) => `/songs/get-details?key=${songid}` }),
    getArtistDetails: builder.query({ query: (artistId) => `/artists/get-details?artist_id=${artistId}` }),
    getSongsByCountry: builder.query({ query: (countryCode) => `/charts/list?id=${countryCode}` }),
    getSongsBySearch: builder.query({ query: (searchTerm) => `/search?term=${searchTerm}` }),
    getSongRelated: builder.query({ query: ({ songid }) => `/songs/list-artist-top-tracks?id=${songid}` }),
  }),
});

export const {
  useGetTopChartsQuery,
  useGetSongDetailsQuery,
  useGetSongRelatedQuery,
  useGetArtistDetailsQuery,
  useGetSongsByCountryQuery,
  useGetSongsBySearchQuery,
} = shazamCoreApi;
