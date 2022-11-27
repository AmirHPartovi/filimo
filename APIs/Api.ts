import axios from "axios";

export const api = axios.request({
    method: 'GET',
    url: 'https://imdb-top-100-movies.p.rapidapi.com/premiummovies',
    headers: {
      'X-RapidAPI-Key': 'b922fcb3b0msh6aea5f733a51e16p18bf80jsn9f74990d6569',
      'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
    }
  })