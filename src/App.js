import React from 'react';
import './App.css';
import SearchBox from './Components/SearchBox';
import CardList from "./Components/CardList";
import { robots } from './Data/robots';

const App = () => {
    return (
        <div>
            <header>
                <h1>RoboFriends <span><h2 className={'inline'}>v2.0</h2></span></h1>
            </header>
            <SearchBox/>
            <CardList robots={robots}/>
        </div>
    );
}

export default App