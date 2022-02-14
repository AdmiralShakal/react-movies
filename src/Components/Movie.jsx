import React from 'react';

function Movie(props) { 
    const {Title,Year, Type, Poster} = props;

    return <div className="movie">
    <div className="card-image waves-effect waves-block waves-light">
      <img className="poster" src={Poster}/>
    </div>
    <div className="card-content">
      <span className="movie-title activator grey-text text-darken-4">{Title}</span>
      <p>{Type} <span className='right'>{Year}</span></p>
    </div>
  </div>
}

export {Movie};