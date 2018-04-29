import React, { Component } from 'react';
import AppCheckbox from './AppCheckbox';
import TextInput from './TextInput';

class SearchForm extends Component {
    render() {
        return (
            <div className="search-form">
                <TextInput placeholder="Поиск по вакансиям" />
                <AppCheckbox />
            </div>
        );
    }
}

export default SearchForm;
