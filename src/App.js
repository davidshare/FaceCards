import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { userData } from './helpers/dummy_data';
import { filterUserData } from './helpers/func';
import './App.css';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component {
	state = {
		users: [],
		searchField: '',
	}

	handleChange = (e) => {
		console.log(e.target.value)
		this.setState({ searchField: e.target.value})
	}

	async componentDidMount(){
		let users;
		try {
			const response = await fetch('https://randomuser.me/api/?results=20');
			const results = await response.json();
			users = results.results;
			this.setState({ users: filterUserData(users) });
		}catch(error){
			this.setState({ users: filterUserData(userData) })
		}
	}


	render(){
		const { users, searchField } = this.state;
		const filteredUsers = users.filter(user =>
      user.name.toLowerCase().includes(searchField.toLowerCase())
    );
		return <div className="App">
		<h1 className="face-cards">Face Cards</h1>
		<SearchBox placeholder="search the faces" handleChange={this.handleChange }/>
		<CardList users={filteredUsers} />
		</div>
	}
}

export default App;
