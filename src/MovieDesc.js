import React, {useState} from 'react';
import {Modal,Button} from 'react-bootstrap';
const API_IMG="https://image.tmdb.org/t/p/w500/";

const MovieDesc =({title, poster_path, vote_average, release_date, overview})=>{
    
    const [tampil, setTampil]=useState(false);
    const handleTampil=()=>setTampil(true);
    const handleTutup=()=>setTampil(false);
    
    return(
        <div className="card text-center mb-3">
            <div className="card-body">
              <img className="card-img-top" src={API_IMG+poster_path} />
              <div className="card-body">
                  <button type="button" className="btn btn-danger" onClick={handleTampil} >View More</button>
                  <Modal show={tampil} onHide={handleTutup} fluid size="sm">
                      
                      <Modal.Header closeButton>
                        <Modal.Title><h3><b>{title}</b></h3></Modal.Title>
                      </Modal.Header>

                      <Modal.Body>
                        <img className="card-img-top" src={API_IMG+poster_path} style={{width:'16.5rem'}}/>
                        <p> </p>
                        <h6>Release Date: {release_date}</h6>
                        <h6>IMDb: {vote_average}</h6>
                        <br></br>
                        <h5><b>Overview</b></h5>
                        <p>{overview}</p>
                      </Modal.Body>

                      <Modal.Footer>
                          <Button variant="danger" onClick={handleTutup}>Close</Button>
                      </Modal.Footer>
                      
                  </Modal>
              </div>
            </div>
        </div>
    )
}

export default MovieDesc;