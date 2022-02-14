import React from 'react';
import { Movie } from './Movie';
import { Preloader } from './Preloader';

function Movies(props) {
    const { movies, loading } = props;

    if (!loading) {return <div className="movies">
        {movies.map(movie => {
            return <Movie key={movie.imdbID} {...movie}
            />
        })}
    </div>;} else {
        return <Preloader/>
    }
}

export { Movies };
