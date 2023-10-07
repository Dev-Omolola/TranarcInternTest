import React from 'react';
import Button from './Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css'

const Navbar = (props) => {


  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className='Search'>
      <nav className="navbar bg-body-tertiary">
        <div className='container-fluid Search-input'>
          <form className="d-flex" role="search" onSubmit={handleSubmit}>
            <input className="form-control me-2" onChange={props.SearchMovie} type="search" placeholder="Search" aria-label="Search" />
            <Button className="btn btn-outline-success" color="success" type="submit" btnText="Search" myFunction={props.Searchftn} />
            {props.Searchftn && (
              <Button btnText='Cancel' display={props.showCancel} myFunction={props.cancelResults} />
            )}
          </form>
        </div>

      </nav>

    </div>
  )
}

export default Navbar;