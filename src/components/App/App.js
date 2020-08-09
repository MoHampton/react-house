import React from 'react';
import './App.css';
import MemberList from '../MemberList/MemberList';
import SearchBar from '../SearchBar/SearchBar'; 
import House from '../../util/House';

class App extends React.Component {
  constructor(props){
    super(props)
        this.state = {
        members: []
    };

    this.searchHouse = this.searchHouse.bind(this);
  }

  searchHouse(location, sortBy){
      House.search(location, sortBy).then(members => {
      this.setState({members: members});
  });
  }

  render() {
  return (
    <div className="App">
      {/*<SearchBar searchHouse={this.searchHouse}/>*/}
      <MemberList members={this.state.members}/> 
    </div>
  );
  }
}

export default App;