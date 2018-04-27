import React, { Component } from 'react';
import searchSVG from './imgs/search.svg';

class SearchForm extends Component {
    render() {
        return (
            <div>
                <img src={searchSVG} className = "" />
            </div>
        );
    }
}

export default SearchForm;
