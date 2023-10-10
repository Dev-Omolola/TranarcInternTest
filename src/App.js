import './App.css';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Skeleton } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import Footer from './component/Footer'

// const apiKey = '971ca30d666209695faca9c60b0d5d35';
// const baseURL = 'https://api.themoviedb.org/3/search/movie';

function App(props) {
  const [playingVideo, setPlayingVideo] = useState(null);
  const [modalMovie, setmodalMovie] = useState(null)

  const modalftnn=(movie)=>{
    if(movie){
      console.log(movie);
      setmodalMovie(movie)
      console.log(movie);
    }
  }

  //Play Trailer
  const playVideo = (movie) => {
    setPlayingVideo(movie);
  };

  //Stop Trailer
  const stopVideo = () => {
    setPlayingVideo(null);
  };

  return (
    <div className='main'>

     
      {props.Spin && <Skeleton active={props.Spin} className='spin' />}
      <div className='wrapper'>
      {/* Modal Start */}

      {modalMovie &&
        <div>
          <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog bg bg-dark">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  <div className='movie-container' >

                    <img
                      src={`https://image.tmdb.org/t/p/w500${modalMovie.poster_path}`}
                      alt={modalMovie.title}


                    />
                    <div className='play-button' >
                      <FontAwesomeIcon icon={faPlayCircle} className='play-icon' />
                    </div>
                  </div>
                  <b>{modalMovie.title}</b>
                  <p>{modalMovie.release_date}</p>
                  <p>{modalMovie.overview}</p>

                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="button" className="btn btn-primary">Save changes</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
      {/* Modal End */}

        {/* Hero Section Start */}
        <div className='Hero-div'>
          {props.heroMovie && (
            <div key={props.heroMovie.id} className='row Hero'>
              <div className='Hero-img col-7'>
                {playingVideo === props.heroMovie ? (
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
                  <div >
                    <img
                      src={`https://image.tmdb.org/t/p/w500${props.heroMovie.poster_path}`}
                      alt={props.heroMovie.title}
                    />
                    <FontAwesomeIcon icon={faPlayCircle} className='play-icon' onClick={() => playVideo(props.heroMovie)} />
                  </div>
                )}
              </div>

              <div className='col-5 Hero-mini'>

                <div>
                  <img
                    src={`https://image.tmdb.org/t/p/w500${props.heroMovie.poster_path}`}
                    alt={props.heroMovie.title}
                  />
                  <p>{props.heroMovie.overview}</p>
                </div>
                <div>
                  <h5>{props.heroMovie.title}</h5>
                  <p>{props.heroMovie.release_date}</p>
                </div>

              </div>

            </div>
          )}
        </div>
        {/* Hero Section End */}

        {/* Movies Section Start */}
        <div className='main-div container' >

          {props.movies.map((movie) => (
            <div key={movie.id} className='main-divv' data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={()=>modalftnn(movie)}>
              <div className='movie-container' >

                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}


                />
                <div className='play-button' >
                  <FontAwesomeIcon icon={faPlayCircle} className='play-icon' />
                </div>
              </div>
              <b>{movie.title}</b>
              <p>{movie.release_date}</p>

            </div>
          ))}


        </div>
        <Footer />
      </div>
    </div >
  );
}

export default App;