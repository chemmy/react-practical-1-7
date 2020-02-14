import React, { Component } from 'react';

class SearchBar extends Component {
  state = {
    search: '',
  }

  onInputType(e) {
    const searchValue = e.target.value;
    this.setState({ search: searchValue });
    this.props.onUserInput(searchValue);
  }

  render() {
    return(
      <div className="search-bar">
        <label>Search by Email</label>
        <div className="ui input">
          <input 
            type="text" 
            placeholder="Search..."
            name='search'
            value={this.state.search}
            onChange={this.onInputType.bind(this)} 
          />
        </div>
      </div>
    )
  }
};

export default SearchBar;