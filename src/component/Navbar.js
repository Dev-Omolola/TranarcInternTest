import React, { useState } from 'react';
import Button from './Button';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from './Modal';
import './Navbar.css'

const Navbar = (props) => {
  const [Searched, setSearched] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  

 

  const openModal = (movie) => {
    setSelectedMovie(movie);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const cancelResults = () => {
    setSearched(null);
    // setSearchMovie('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Searchftn();
  };

  return (
    <div className='Search'>
      <nav className="navbar bg-body-tertiary">
        <div className='container-fluid Search-input'>
          <form className="d-flex" role="search" onSubmit={handleSubmit}>
            <input className="form-control me-2" onChange={props.SearchMovie} type="search" placeholder="Search" aria-label="Search" />
            <Button className="btn btn-outline-success" color="success" type="submit" btnText="Search" myFunction={props.Searchftn} />
            {Searched && (
              <Button btnText='Cancel' myFunction={cancelResults} />
            )}
          </form>
        </div>
        {Searched &&
        <div className='show-search'>
            {Searched.map((movie) => (
              <div key={movie.id} className='Hero-search' onClick={() => openModal(movie)}>
                <div>
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                  />
                </div>
                <div>
                  <h2>{movie.title}</h2>
                  <p>{movie.overview}</p>
                </div>
              </div>
            ))}
        </div>
}
      </nav>
      {/* {modalOpen && selectedMovie && (
        <Modal
          isOpen={modalOpen}
          onClose={closeModal}
          movie={selectedMovie}
        />
      )} */}

    </div>
  )
}

export default Navbar;