// import { Button } from 'bootstrap'
import './Navbar.css'
import React, { useState } from 'react';
import Button from './Button';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';



const Navbar = (props) => {
  const [SearchMovie, setSearchMovie] = useState("");
  const [Show, setShow]= useState(false);
  const [Searched, setSearched]= useState(null)

  const apiKey = '971ca30d666209695faca9c60b0d5d35';
const baseURL = `https://api.themoviedb.org/3/search/movie?query=${SearchMovie}&include_adult=false&language=en-US&page=1`;
  const Searchftn = async ()=>{
    
   
        try {
          const response = await axios.get(baseURL, {
            params: {
              api_key: apiKey,

            },
          });
          console.log(response,"Search result");
          setSearched(response.data.results);
          // console.log(Searched);   
        } catch (error) {
          console.error('Error fetching data:', error);
          
  
        }
      };
      
      const cancelResults = () => {
        setSearched(null); 
        setSearchMovie(" ");   
         };
    const handleSubmit=(event)=>{
     event.preventDefault()
    }
  return (
    <div className='Search'>
      <nav class="navbar bg-body-tertiary">
           <div className='container-fluid Search-input'>
             <form class="d-flex" role="search" onSubmit={handleSubmit}>
               <input class="form-control me-2" onChange={(event)=>setSearchMovie(event.target.value)} type="search" placeholder="Search" aria-label="Search"/>
               {/* <button  type="submit">Search</button> */}
               <Button class="btn btn-outline-success" color="success" type="submit" btnText="Search" myFunction={Searchftn}/> 
               {Searched && (
                    <Button btnText='Cancel' myFunction={cancelResults} />
                )}
             </form>

           </div>
          
      </nav>
       
        <div className='show-search'>
        {Searched &&
          Searched.map((movie) => (
            <div key={movie.id} className='Hero-search'>
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
    </div>
  )
}

export default Navbar