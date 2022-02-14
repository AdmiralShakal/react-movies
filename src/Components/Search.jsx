import React from 'react';

class Search extends React.Component {

  state = {
    search: '',
    category: "empty"
  };



  render() {
    return (
      <div className="row">
        <div className="input-field">
          <input
            className="validate"
            placeholder="search"
            type="search"
            value={this.state.search}
            onChange={(e) =>
              this.setState({ search: e.target.value })
            }
          />

          <p onChange={(e) =>
              this.setState({ category: e.target.value })
            }>
              <label>
                <input 
                className="with-gap radio" 
                name="group3" 
                type="radio" 
                value=""
               
                />
                <span>All</span>
              </label>

              <label>
                <input 
                className="with-gap radio" 
                name="group3" 
                type="radio" 
                value="movie"
                />
                <span className='radio'>Movies</span>
              </label>

              <label>
                <input 
                className="with-gap radio" 
                name="group3" 
                type="radio"
                value="series"
                />
                <span>Series</span>
              </label>
          </p>

          <button
            className="btn search-btn"
            onClick={() => this.props.handleSearch(this.state.search, this.state.category)}>
            Search
          </button>
        </div>
      </div>
    );
  }
}

export { Search };