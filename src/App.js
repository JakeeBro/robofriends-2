import React, { Component } from 'react';
import './App.css';
import SearchBox from './Components/SearchBox';
import CardList from "./Components/CardList";
import { robots } from './Data/robots';

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }

    // Custom Function to be used as a Binding for the SearchBox
    // Also for whatever reason this HAS to be an Arrow Function. Something to do with the way Components Interact
    onSearchChange = (event) => {
        // When this Event happens, update the State of the Searchfield
        this.setState({
            searchfield: event.target.value
        })
    }

    render() {
        // Create a new Array containing the filtered list using the updated State
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })

        return (
            <div>
                <header>
                    <h1>RoboFriends <span><h2 className={'inline glow'}>v2.0</h2></span></h1>
                </header>
                <SearchBox searchChange={this.onSearchChange}/>
                <CardList robots={filteredRobots}/>
            </div>
        );
    }
}

export default App