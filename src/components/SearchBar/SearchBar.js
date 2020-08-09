import React from 'react';
import './SearchBar.css';
import {Button} from 'react-bootstrap';

class SearchBar extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            location: 'NC', 
            sortBy: 'familyName'
        };

        // this.handleHometownChange = this.handleHometownChange.bind(this);
        this.handleLocationChange = this.handleLocationChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);

        
        this.sortByOptions ={
        'Last Name': 'familyName',
        'First Name': 'givenName'
        };
    }

//TODO: Add toggle function for asc/desc query

    getSortByClass(sortByOption) {
        if (this.state.sortBy === sortByOption) {
        return 'active';
        }
        return '';
    }

    handleSortByChange(sortByOption) {
        this.setState({sortBy: sortByOption});
    }

    handleLocationChange(event) {
        this.setState({location: event.target.value});
    }

    handleSearch(event) {
        this.props.searchHouse(this.state.location, this.state.sortBy);

    event.preventDefault();
    }

  renderSortByOptions() {
    return Object.keys(this.sortByOptions).map(sortByOption => {
      let sortByOptionValue = this.sortByOptions[sortByOption];
      return (<li className={this.getSortByClass(sortByOptionValue)}
                  key={sortByOptionValue}
                  onClick={this.handleSortByChange.bind(this, sortByOptionValue)}>
                {sortByOption}
             </li>);
    });
  }

  render() {
    return (
      <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul>
            Sort Results By: {this.renderSortByOptions()}
          </ul>
        </div>
        <div className="SearchBar-fields">
          <input placeholder="Enter State Code (ex. NY)" onChange={this.handleLocationChange}/>
        </div>
        <div className="SearchBar-submit">
          <Button variant="secondary" onClick={this.handleSearch}>Send</Button>
        </div>
      </div>
    );
  }
}

export default SearchBar;