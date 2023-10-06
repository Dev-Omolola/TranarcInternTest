import './App.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Skeleton } from 'antd';
import Play from './component/Images/play-circle.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';

const apiKey = '971ca30d666209695faca9c60b0d5d35';
const baseURL = 'https://api.themoviedb.org/3/search/movie';

function App() {
  const [movies, setMovies] = useState([]);
  const [heroMovie, setHeroMovie] = useState(null);
  const [Spin, setSpin] = useState(true);

  useEffect(() => {
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

    fetchMovies();
  }, []);

  const [playingVideo, setPlayingVideo] = useState(null);

  const playVideo = (movie) => {
    setPlayingVideo(movie);
  };

  const stopVideo = () => {
    setPlayingVideo(null);
  };

  return (
    <div className='main'>
      {Spin && <Skeleton active={Spin} className='spin' />}
      <div className='Hero-div'>
        {heroMovie && (
          <div key={heroMovie.id} className='row Hero'>
            <div className='Hero-img col-7'>
              {playingVideo === heroMovie ? (
                <video
                  className='movie-video'
                  src={
                    'https://imdb-video.media-imdb.com/vi581550617/1434659607842-pgv4ql-1650328233185.mp4?Expires=1696612158&Signature=H0RxTGHvWt-GBjfw5rnzmHHDaJrEy-d2OZf1qdO9hMqzjK-va7hYpzApmWfhQx81ZwkxIFEDR-zURDCgCWjHEmpxrd~9IhrHxaU0CKc9SWRpCi1qKniuukjVYUXFe7t~K0S~kkOIJL2skfaumvr2GGiyG7jwCcTodP3XaL8XKoEURwafW5sy7MZx2I9228wt1hO~wfe7~9~NNNhMhWhIlUX8gJxxjUJy7Y7DEQyDhA5xDWtu1UmhpPUmf1RfcExRES-K3nkgaCjYCCzEyD47-mKcWCJpKpFZ3dFPG6UMeHMEa5vhL3TLp2d0kYdu1iJ6CGTwKEftuRH92jPg7Z51yg__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA'
                  }
                  autoPlay
                  loop
                  onClick={stopVideo}
                ></video>
              ) : (
                <div onClick={() => playVideo(heroMovie)}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500${heroMovie.poster_path}`}
                    alt={heroMovie.title}
                  />
                  <FontAwesomeIcon icon={faPlayCircle} className='play-icon' />
                </div>
              )}
            </div>

            <div className='col-5 Hero-mini'>
              <div>
                <img
                  src={`https://image.tmdb.org/t/p/w500${heroMovie.poster_path}`}
                  alt={heroMovie.title}
                />
                <p>{heroMovie.overview}</p>
              </div>
              <div>
                <h5>{heroMovie.title}</h5>
                <p>{heroMovie.release_date}</p>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className='main-div container'>
        {movies.map((movie) => (
          <div key={movie.id} className='main-divv'>
            <div className='movie-container'>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
              <div className='play-button' onClick={() => playVideo(movie)}>
                <FontAwesomeIcon icon={faPlayCircle} className='play-icon' />
              </div>
            </div>
            <b>{movie.title}</b>
            <p>{movie.release_date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;