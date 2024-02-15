
import { Interface } from 'readline';
import { json } from 'stream/consumers';
const fetch = require('node-fetch');

interface Movie {
  poster_path: string;
  // Add other movie properties here as needed
}

export default async function getData() {
const movieId = 5;
      const url = `https://api.themoviedb.org/3/account/${process.env.API_ACCESS_TOKEN}`;
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYmY1YTUyODA2MjliZTI0MzgzZTNiODg0MjRkNzZkYyIsInN1YiI6IjY1Y2RmMTYwMzEyMzQ1MDE3YmJiMTQ3ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0D7bGL73GTzarWR45vzU9Sj2Rf_OAvCXnuabutkrIAY'
        }
      };
      
    // Then you can use this interface with your fetch function
    fetch(url, options)
    .then((res: Response) => res.json())
    .then((json: Movie) => {
      const posterUrl = `https://image.tmdb.org/t/p/w500${json.poster_path}`;
      console.log(posterUrl);
    })
    .catch((err: Error) => console.error('error:' + err));
}


