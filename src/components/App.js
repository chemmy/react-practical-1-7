import React, { Component } from 'react';
import faker from 'faker';
import FlagCard from './FlagCard';
import SearchBar from './SearchBar';
import Spinner from './Spinner';

export default class App extends Component {
  state = {
    searchKey: null,
    isSearching: false,
    searchResults: [],
  };

  componentDidMount() {
    this.users = new Array(10).fill(null).map(e => {
      return {
        id: faker.random.uuid(),
        email: faker.internet.email(),
        jobTitle: faker.name.jobTitle(),
        avatar: faker.image.avatar(),
        content: faker.lorem.sentences(3),
        countryCode: faker.address.countryCode(),
      }
    });
    console.log('users', this.users);
    this.setState({ searchResults: this.users });
  }

  onUserInput(data) {
    let searchTimeout;
    clearTimeout(searchTimeout);

    this.setState({ isSearching: true });
    searchTimeout = setTimeout(() => {
      const filteredUsers = this.users.filter(item => item.email.toLowerCase().includes(data.toLowerCase()));
      this.setState({ isSearching: false, searchResults: filteredUsers });
    }, 1500);
  }

  render() {
    const { isSearching, searchResults } = this.state;
    return(
      <div className="app">
        <SearchBar onUserInput={this.onUserInput.bind(this)} />
        {
          isSearching
            ? <Spinner />
            : searchResults.length
              ? <div className="ui link cards">{
                searchResults.map(user => (
                  <FlagCard key={user.id} user={user} />
                ))
              }</div>
              : <div>No Results!</div>
        }
      </div>
    )
  }
}