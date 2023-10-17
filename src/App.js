import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './movielist_logo.png';
import MovieDesc from './MovieDesc';
import Profil from "./components/Profil";
import { Navbar,Container,Nav,Form, FormControl,Button } from 'react-bootstrap';
import React,{useState,useEffect} from 'react';
import { useAuth0 } from "@auth0/auth0-react";

const API_SEARCH="https://api.themoviedb.org/3/search/movie?api_key=734ff64c82ca39a22e8f0492ae9c75f6&query";
const API_URL="https://api.themoviedb.org/3/movie/popular?api_key=734ff64c82ca39a22e8f0492ae9c75f6";

function App() {

  const [movie, setMovie]=useState([]);
  const [query, setQuery]=useState('');
  const { isLoading, error } = useAuth0();

  useEffect(() => {
    fetch(API_URL)
    .then((res)=>res.json())
    .then(data=>{
      setMovie(data.results);
    })
  }, [])


  const cariMovie = async(e)=>{
    e.preventDefault();
    console.log("Searching...");
    try{
      const url=`https://api.themoviedb.org/3/search/movie?api_key=bcc4ff10c2939665232d75d8bf0ec093&query=${query}`;
      const res= await fetch(url);
      const data= await res.json();
      setMovie(data.results);
    }
    catch(e){
      console.log(e);
    }
  }

  const gantiHandler=(e)=>{
    setQuery(e.target.value);
  }

  return (
   
    <main className="column">
   <>
    <Navbar expand="lg">
      <Container fluid>
        
        <Navbar.Brand href="/home">
          <img width="100px" height="auto" className="img-responsive" src={logo}  alt="Movielist" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll"></Navbar.Toggle>

          <Navbar.Collapse id="nabarScroll">
            <Nav 
            style={{maxHeight:'200px'}}
            className="me-auto my-2 my-lg-3"
            navbarScroll></Nav>

            <Form className="d-flex" onSubmit={cariMovie}>
              <FormControl
              placeholder="What do you want to watch?"
              type="search"
              className="me-2"
              aria-label="search"
              name="query"
              value={query} onChange={gantiHandler}></FormControl>
              <Button variant="danger" type="submit">Search</Button>
    
              {error && <p>Authentication Error</p>}
              {!error && isLoading && <p>Loading...</p>}
              {!error && !isLoading && (
                <>
                </>
              )}
    
            </Form>
          </Navbar.Collapse>

      </Container>
    </Navbar>
    <div>
      {movie.length > 0 ?(
        <div className="container">
        <div className="grid">
          {movie.map((movieRequest)=>
          <MovieDesc key={movieRequest.id} {...movieRequest}/>)}
            </div>
    </div>
      ):(
        <h2>Sorry, no Movies Found.</h2>
      )}
    </div>   
    </></main>
   
  );
}

export default App;
