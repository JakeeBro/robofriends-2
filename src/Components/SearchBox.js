import React from "react";
import './SearchBox.css';

const SearchBox = () => {
    return (
        <div className={'input-container'}>
            <input type={'search'} placeholder={'Search Robots'}/>
        </div>
    );
}

export default SearchBox;