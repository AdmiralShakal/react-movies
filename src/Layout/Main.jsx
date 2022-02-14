import React from "react"
import { Movies } from "../Components/Movies"
import {Search} from "../Components/Search"

const API_KEY = process.env.REACT_APP_API_KEY;

class Main extends React.Component {

    state = {
        movies: [],
        loading: false
    }


    handleSearch = (movieName,category) => {
        this.setState({loading: true})
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${movieName}&type=${category}`)
            .then(res => res.json())
            .then(data => this.setState({ movies: data.Search, loading:false }))
    }

    render() {
        return <div className="content">
            <Search handleSearch={this.handleSearch} />
            {this.state.movies ? <Movies movies={this.state.movies}  />
                : <div className="nomovies"> Theres no movies. Try search better</div>}
        </div>
}
}

export { Main }