import React, { useEffect, useState } from 'react'
import Navbar from './component/Navbar'
import App from './App'
import axios from 'axios'

const Main = () => {
  const [SearchMovie, setSearchMovie] = useState("")
  const [movies, setMovies] = useState([]);
  const [Spin, setSpin] = useState(false);
  const [heroMovie, setHeroMovie] = useState(null);

  const apiKey = '971ca30d666209695faca9c60b0d5d35';
  const baseURL = `https://api.themoviedb.org/3/search/movie?query=${SearchMovie}&include_adult=false&language=en-US&page=1`;
  const fetchMovies = async () => {
    try {
      const response = await axios.get(baseURL, {
        params: {
          api_key: apiKey,
          query: 'Nigeria',
          region: 'Nigeria'
        },
      });
      setMovies(response.data.results);
      console.log(response.data.results);
      setSpin(false);

      if (response.data.results.length > 0) {
        setHeroMovie(response.data.results[5]);
      }
      
    } catch (error) {
      console.error('Error fetching data:', error);
      setSpin(false);
    }

  };
  useEffect(() => {
    setSpin(true)
    fetchMovies();
  }, []);
  const Searchftn = async () => {
    try {
      const response = await axios.get(baseURL, {
        params: {
          api_key: apiKey,
        },
      });
      console.log(response.data.results, 'Search result');
      setHeroMovie(response.data.results[0]);
      setMovies(response.data.results)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  const cancelResults = () => {
    console.log("clicking");
    fetchMovies()
  };
  return (
    <>
      <Navbar
        Searchftn={Searchftn}
        cancelResults={cancelResults}
        SearchMovie={(e) => setSearchMovie(e.target.value)} />
      <App
        movies={movies}
        Spin={Spin}
        heroMovie={heroMovie} />
    </>
  )
}

export default Main