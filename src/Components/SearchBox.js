import React from "react";
import './SearchBox.css';

const SearchBox = ({searchChange}) => {
    return (
        <div className={'input-container'}>
            <input onChange={searchChange} type={'search'} placeholder={'Search Robots'}/>
        </div>
    );
}

export default SearchBox;